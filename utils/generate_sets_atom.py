#!/usr/local/bin/python3

import requests

SCRYFALL_API_ENDPOINT = "https://api.scryfall.com/sets"

OUTPUT_TEMPLATE = """import {{ Atom }} from 'atoms/atoms';

/**
 * Sets fetched from Scryfall.
 *
 * Generated by: ./utils/generate_sets_atom.py > src/atoms/sets.js
 */
export const SET_CODES = [
{set_list}
];

/** Atom for searching by set, edition, or block. */
export const SET_ATOM = new Atom(
    ['set', 's', 'edition', 'e', 'block', 'b'],
    [':'],
    SET_CODES,
);

/** Atom for searching specifically for cards in a special type of set. */
export const SET_TYPE_ATOM = new Atom(
    ['st'],
    [':'],
    [
        'boxset',
        'multiplayer',
        'beginner',
        'core',
        'expansion',
        'masters',
        'unset',
        'portal',
        'commander',
        'duel_deck',
        'from_the_vault',
        'premium_deck',
        'fnm',
        'judge_gift',
        'arena_league',
        'player_rewards',
        'media_insert',
        'tourney',
        'gateway',
        'wpn',
        'instore',
        'convention',
        'set_promo',
        'duels',
        'event',
        'premiere_shop',
        'masterpiece',
    ],
);"""


def get_list_line(code, name):
    """Formats a set code and set name for insertion into the list of sets."""
    spaces = [" "] * (5 - len(code))
    return f"    '{code}',{''.join(spaces)} // {name}"


def main():
    r = requests.get(SCRYFALL_API_ENDPOINT)
    all_sets = sorted(r.json()["data"], key=lambda set: set["released_at"])
    data = [(mtgset["code"], mtgset["name"]) for mtgset in all_sets]
    data.sort(key=lambda tup: tup[0])
    lines = [get_list_line(code, name) for (code, name) in data]
    print(OUTPUT_TEMPLATE.format(set_list="\n".join(lines)))


if __name__ == "__main__":
    main()
