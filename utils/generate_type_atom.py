#!/usr/local/bin/python3

import sys
import re
import urllib.request

from common import LATEST_COMP_RULES_URL

OUTPUT_TEMPLATE = """import {{ Atom }} from 'atoms/atoms';

////////////////////////////////////////////////////////////////////////////////
//       Generated by ./utils/generate_type_atom.py > src/atoms/type.js       //
//                           DO NOT EDIT BY HAND                              //
////////////////////////////////////////////////////////////////////////////////

const SUPERTYPES = [
{supertype_list}
];
const TYPES = [
{card_type_list}
];
const ARTIFACT_SUBTYPES = [
{artifact_subtype_list}
];
const CREATURE_SUBTYPES = [
{creature_subtype_list}
];
const ENCHANTMENT_SUBTYPES = [
{enchantment_subtype_list}
];
const LAND_SUBTYPES = [
{land_subtype_list}
];
const PLANE_SUBTYPES = [
{plane_subtype_list}
];
const PLANESWALKER_SUBTYPES = [
{planeswalker_subtype_list}
];
const SPELL_SUBTYPES = [
{spell_subtype_list}
];

/** Atom for searching by type with `type` and `t`. */
export const TYPE_ATOM = new Atom(
    ['type', 't'],
    [':'],
    [
        ...SUPERTYPES,
        ...TYPES,
        ...ARTIFACT_SUBTYPES,
        ...CREATURE_SUBTYPES,
        ...ENCHANTMENT_SUBTYPES,
        ...LAND_SUBTYPES,
        ...PLANE_SUBTYPES,
        ...PLANESWALKER_SUBTYPES,
        ...SPELL_SUBTYPES,
    ],
);"""


def extract_comma_separated_list(line, type_keyword):
    """Extracts a comma separated list (stripped of extras) from a line."""
    start_phrase = f"The {type_keyword} are"
    parens = re.compile(r" \([^,]+\)")
    stripped = parens.sub("", line)
    items = (
        stripped.split(start_phrase)[1]
        .strip()
        .split(".")[0]
        .replace(" and", "")
        .replace("’", "'")
        .split(", ")
    )
    return [item.lower() for item in items]


def format_item_for_output(item):
    """Formats a single list item for outputting in the generated Javascript."""
    leader = "// " if " " in item else ""
    quote = '"' if "'" in item else "'"
    return f"    {leader}{quote}{item.lower()}{quote},"


def format_list_for_output(list):
    """Formats a list to be dumped directly into the generated output."""
    return "\n".join([format_item_for_output(item) for item in sorted(list)])


def main():
    response = urllib.request.urlopen(LATEST_COMP_RULES_URL)
    lines = [line.strip() for line in response.read().decode("utf-8").split("\n")]

    card_types = None
    artifact_types = None
    enchantment_types = None
    land_types = None
    pw_types = None
    spell_types = None
    creature_types = None
    plane_types = None
    for line in lines:
        if line.startswith("205.2a"):
            card_types = extract_comma_separated_list(line, "card types")
        elif line.startswith("205.3g"):
            artifact_types = extract_comma_separated_list(line, "artifact types")
        elif line.startswith("205.3h"):
            enchantment_types = extract_comma_separated_list(line, "enchantment types")
        elif line.startswith("205.3i"):
            land_types = extract_comma_separated_list(line, "land types")
        elif line.startswith("205.3j"):
            pw_types = extract_comma_separated_list(line, "planeswalker types")
        elif line.startswith("205.3k"):
            spell_types = extract_comma_separated_list(line, "spell types")
        elif line.startswith("205.3m"):
            creature_types = extract_comma_separated_list(line, "creature types")
        elif line.startswith("205.3n"):
            plane_types = extract_comma_separated_list(line, "planar types")
        elif line.startswith("205.4a"):
            super_types = extract_comma_separated_list(line, "supertypes")
            super_types.extend(
                [
                    "host",
                    "elite",
                ]
            )
    if (
        card_types is None
        or artifact_types is None
        or enchantment_types is None
        or land_types is None
        or pw_types is None
        or spell_types is None
        or creature_types is None
        or plane_types is None
        or super_types is None
    ):
        sys.stderr.write("Failed to fetch one of the type sets\n")
        return 2

    print(
        OUTPUT_TEMPLATE.format(
            supertype_list=format_list_for_output(super_types),
            card_type_list=format_list_for_output(card_types),
            artifact_subtype_list=format_list_for_output(artifact_types),
            creature_subtype_list=format_list_for_output(creature_types),
            enchantment_subtype_list=format_list_for_output(enchantment_types),
            land_subtype_list=format_list_for_output(land_types),
            plane_subtype_list=format_list_for_output(plane_types),
            planeswalker_subtype_list=format_list_for_output(pw_types),
            spell_subtype_list=format_list_for_output(spell_types),
        )
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
