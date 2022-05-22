# Script for generating atoms' data automatically.

import argparse
import os
import re
import requests
import sys

from enum import Enum
from pathlib import Path
from typing import Iterable, Optional


COMPREHENSIVE_RULES_URL = (
    "https://media.wizards.com/2022/downloads/MagicCompRules%2020220429.txt"
)

# Sentinel text marking either end of a section to replace
SECTION_START_LINE = "// START_SECTION"
SECTION_END_LINE = "// END_SECTION"

# All atoms this generator can replace
SUPPORTED_ATOMS = [
    "keyword",
    "set",
    "type",
    "watermark",
]

# Location relative to which to search for files when replacing text
SCRIPT_PATH = Path(os.path.dirname(__file__))


class FullRules:
    """Helper class for encapsulating interactions with the comprehensive rules."""

    def __init__(self):
        self.initialized = False
        self.lines = []

    def fetch(self):
        """Fetch and cache the comprehensive rules if needed. Otherwise, do nothing."""
        if not self.initialized:
            # TODO: This is encoded as ISO-8859-1. It would be nice if it could be UTF-8 before
            # splitting.
            self.lines = requests.get(COMPREHENSIVE_RULES_URL).text.splitlines()
            self.initialized = True

    def get_lines(self) -> Iterable[str]:
        """Get the contents fof the rules, line-by-line."""
        self.fetch()
        return self.lines

    def get_rule(self, rule_number: str) -> Optional[str]:
        """Get a particular rule by its number, if it exists."""
        # This can be massively sped up with some data structures if necessary.
        if rule_number[-1] != "." and rule_number[-1].isdigit():
            rule_number = rule_number + "."
        for line in self.get_lines():
            if line.startswith(rule_number):
                # Normalize some parts of the encoding. If we could just normalize the whole doc as
                # we got it that would be far preferable. Then we could just do normal string
                # replaces.
                n = ""
                i = 0
                while i < len(line):
                    c = line[i]
                    if ord(c) < 128:
                        n += c
                    elif ord(c) == 226 and ord(line[i + 1]) == 128:
                        if ord(line[i + 2]) == 153:
                            n += "'"
                            i += 3
                            continue
                        elif ord(line[i + 2]) == 156 or ord(line[i + 2]) == 157:
                            n += '"'
                            i += 3
                            continue
                    i += 1
                return n
        return None


def eprint(*args, **kwargs):
    """Alternative to print that prints to stderr."""
    print(*args, file=sys.stderr, **kwargs)


def replace_section(file_with_section: str, section_name: str, content: str):
    """Replace a named section from a specified file."""
    start_line = f"{SECTION_START_LINE} {section_name}"
    end_line = f"{SECTION_END_LINE} {section_name}"

    class ParseState(Enum):
        """Where the parser is in the file with a section to replace."""

        PRE = 1  # Before the start of the section
        INSIDE = 2  # Inside the section to replace
        POST = 3  # After the section to replace

    parse_state = ParseState.PRE

    prelines = []
    postlines = []
    successfully_parsed_section = False
    with open(file_with_section, "r") as f:
        for line in f.readlines():
            if start_line in line:
                if parse_state == ParseState.PRE:
                    parse_state = ParseState.INSIDE
                    continue
                eprint("Multiple sections with the same name are not supported.")
                return
            elif end_line in line:
                if parse_state == ParseState.INSIDE:
                    parse_state = ParseState.POST
                    successfully_parsed_section = True
                    continue
                eprint("Found section end without matching start")
                return
            else:
                if parse_state == ParseState.PRE:
                    prelines.append(line.rstrip())
                elif parse_state == ParseState.POST:
                    postlines.append(line.rstrip())

    if not successfully_parsed_section:
        eprint(f"file [{file_with_section}] did not contain section [{section_name}]")
        return

    # TODO: Have this respect white space at the start of the line when printing the section
    # start/end portions again. Until then, format all modified files before submitting.
    all_lines = [
        *prelines,
        start_line,
        content,
        end_line,
        *postlines,
    ]

    with open(file_with_section, "w") as f:
        f.write("\n".join(all_lines))


def extract_list(name: str, rule: str, extras: Iterable[str] = []) -> Optional[str]:
    """Heuristically attempt to extract a list from comprehensive rules text."""
    # Strip all parentheticals out of the rule
    stripped_rule = re.sub(r"\([^)]+\)", "", rule)

    # Match against show rules lists tend to be written to get list text
    list_pattern = re.compile(r"^.*are ([^.]+)\..*$")
    matches = list_pattern.match(stripped_rule)
    if not matches:
        eprint(f"Failed to extract list from rule {rule}")
        return None
    items = matches.group(1).replace(" and", "").split(", ")

    # Format the output while normalizing each line based on its content
    ret = f"const {name} = [\n"
    for item in sorted(items + extras):
        item = item.strip().lower()
        comment_prefix = "// " if " " in item else ""
        quote = '"' if "'" in item else "'"
        ret += f"    {comment_prefix}{quote}{item}{quote},\n"
    ret += "];"

    return ret


def regenerate_watermark_atom():
    """Regenerates the list of known watermarks from Scryfall's cards API."""
    watermark_endpoint = "https://api.scryfall.com/cards/search?q=has%3Awm"
    watermark_names = set(
        filter(
            None,
            [
                (card["watermark"] if "watermark" in card else None)
                for card in requests.get(watermark_endpoint).json()["data"]
            ],
        ),
    )
    replace_section(
        SCRIPT_PATH / "src" / "atoms" / "art.js",
        "WATERMARK_ATOM_VALUES",
        (
            "    [\n"
            + "\n".join([f"        '{value}'," for value in sorted(watermark_names)])
            + "\n    ],"
        ),
    )


def regenerate_keyword_atom(full_rules: FullRules):
    """Regenerates the list of known keywords by scraping the comprehensive rules text."""
    keyword_pattern = re.compile(r"^702\.(\d+)\. (.*)$")

    # Some keyword actions (rules 701) are included, while most are not.
    special_case_keyword_actions = [
        "adapt",
        "amass",
        "assemble",
        "bolster",
        "clash",
        "connive",
        "detain",
        "exert",
        "explore",
        "fateseal",
        "fight",
        "goad",
        "investigate",
        "learn" "manifest",
        "meld",
        "mill",
        "monstrosity",
        "populate",
        "proliferate",
        "scry",
        "support",
        "surveil",
        "transform",
    ]

    keywords = [*special_case_keyword_actions]
    for line in full_rules.get_lines():
        match = keyword_pattern.match(line)
        if match and match.group(1) != "1":
            keyword = match.group(2).lower()
            if " and " in keyword:
                keywords.extend(keyword.split(" and "))
            else:
                keywords.append(keyword)

    keyword_lines = []
    for keyword in sorted(keywords):
        comment = ""
        if " " in keyword:
            comment = "// "
        keyword_lines.append(f"        {comment}'{keyword}',")

    replace_section(
        SCRIPT_PATH / "src" / "atoms" / "keyword.js",
        "KEYWORD_ATOM_VALUES",
        "    [\n" + "\n".join(keyword_lines) + "\n    ],",
    )


def regenerate_set_atom():
    """Regenerates the set atom by pulling set data from the Scryfall sets API."""
    ENDPOINT = "https://api.scryfall.com/sets"

    r = requests.get(ENDPOINT)
    all_sets = sorted(
        r.json()["data"], key=lambda set: (set["released_at"], set["code"])
    )

    lines = []
    for mtgset in all_sets:
        spaces = [" "] * (5 - len(mtgset["code"]))
        lines.append(f"    '{mtgset['code']}',{''.join(spaces)} // {mtgset['name']}")

    replace_section(
        SCRIPT_PATH / "src" / "atoms" / "sets.js",
        "SET_ATOM_VALUES",
        "\n".join(lines),
    )


def regenerate_type_atom(full_rules: FullRules):
    """Regenerates all lists of known types by scraping the comprehensive rules text."""
    supertypes = extract_list(
        "SUPERTYPES", full_rules.get_rule("205.4a"), extras=["elite", "host"]
    )
    if not supertypes:
        eprint(f"Failed to extract card types")

    card_types = extract_list("CARD_TYPES", full_rules.get_rule("205.2a"))
    if not card_types:
        eprint(f"Failed to extract card types")

    artifact_subtypes = extract_list("ARTIFACT_SUBTYPES", full_rules.get_rule("205.3g"))
    if not artifact_subtypes:
        eprint(f"Failed to extract card types")

    creature_subtypes = extract_list(
        "CREATURE_AND_TRIBAL_SUBTYPES", full_rules.get_rule("205.3m")
    )
    if not creature_subtypes:
        eprint(f"Failed to extract card types")

    enchantment_subtypes = extract_list(
        "ENCHANTMENT_SUBTYPES", full_rules.get_rule("205.3h")
    )
    if not enchantment_subtypes:
        eprint(f"Failed to extract card types")

    land_subtypes = extract_list("LAND_SUBTYPES", full_rules.get_rule("205.3i"))
    if not land_subtypes:
        eprint(f"Failed to extract card types")

    plane_subtypes = extract_list("PLANE_SUBTYPES", full_rules.get_rule("205.3n"))
    if not plane_subtypes:
        eprint(f"Failed to extract card types")

    planeswalker_subtypes = extract_list(
        "PLANESWALKER_SUBTYPES", full_rules.get_rule("205.3j")
    )
    if not planeswalker_subtypes:
        eprint(f"Failed to extract card types")

    spell_subtypes = extract_list("SPELL_SUBTYPES", full_rules.get_rule("205.3k"))
    if not spell_subtypes:
        eprint(f"Failed to extract card types")

    replace_section(
        SCRIPT_PATH / "src" / "atoms" / "type.js",
        "TYPE_ATOM_VALUES",
        "\n".join(
            [
                supertypes,
                card_types,
                artifact_subtypes,
                creature_subtypes,
                enchantment_subtypes,
                land_subtypes,
                plane_subtypes,
                planeswalker_subtypes,
                spell_subtypes,
            ]
        ),
    )


def regenerate_atoms(full_rules: FullRules, atoms: Iterable[str]):
    """Regenerate specify atoms by delegating to their regeneration functions."""

    if "all" in atoms:
        regenerate_atoms(full_rules, sorted(SUPPORTED_ATOMS))
    else:
        for atom in atoms:
            if atom not in SUPPORTED_ATOMS:
                eprint(f"Skipping unknown atom to regenerate: {atom}")
                continue

            eprint(f"Regenerating {atom} atom... ", end="", flush=True)
            if atom == "keyword":
                regenerate_keyword_atom(full_rules)
            elif atom == "set":
                regenerate_set_atom()
            elif atom == "type":
                regenerate_type_atom(full_rules)
            elif atom == "watermark":
                regenerate_watermark_atom()
            else:
                eprint(f"Skipping unknown atom to regenerate: {atom}")
                continue
            eprint("done!")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate atoms for Scryfall Helper.")
    parser.add_argument(
        "atoms", nargs="+", metavar="atom", help="which atom to regenerate"
    )
    args = parser.parse_args()

    regenerate_atoms(FullRules(), args.atoms)
