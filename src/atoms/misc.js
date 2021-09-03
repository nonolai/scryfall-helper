import { Atom } from 'atoms/atoms';
import { FORMATS } from 'atoms/format';
import { SET_CODES } from 'atoms/sets';

/** Atom for searching by miscellaneous characteristics. */
export const HAS_ATOM = new Atom(
    ['has'],
    [':'],
    [
        'indicator',  // Has a color indicator
    ]
);

/** Atom for searching by belonging to various groupings. */
export const IN_ATOM = new Atom(
    ['in'],
    [':'],
    [
        ...SET_CODES,
        ...FORMATS,
    ]
);

/** Atom for searching by miscellaneous identity. */
export const IS_ATOM = new Atom(
    ['is'],
    [':'],
    [
        'booster', // Cards that were sold in boosters
        'brawler', // Cards that can be your Brawl Commander
        'buyabox', // Cards that were available as buy-a-box promos
        'commander', // Cards that can be your commander
        'companion', // Cards that can be companions
        'digital', // Prints of cards that are only available digitally
        'dfc', // Double-faced cards
        'duelcommander', // Cards that can be your duel commander
        'etched', // Cards available in etched foil
        'flip', // Flip cards
        'foil', // Cards available in foil
        'frenchvanilla', // Creature with only keyword abilities
        'full', // Is Full art
        'funny', // Un-sets, holiday, and other funny cards
        'gameday', // Cards winnable as gameday promos
        'giftbox', // Cards from gift boxes
        'glossy', // Cards available with a glossy finish
        'hires', // Cards where Scryfall has high-resolution art
        'historic', // It's legendary, an artifact, or a saga
        'hybrid', // Has hybrid mana in its cost
        'intro_pack', // Cards from intro packs
        'league', // League promos (*shrug*)
        'leveler', // Cards w/ level up
        'mdfc', // Modal double-faced cards
        'meld', // Cards that meld
        'nonfoil', // Cards available in non-foil
        'party', // It's a cleric, rogue, warrior, or wizard
        'permanent', // It's... it's a permanent
        'planeswalker_deck',
        'phyrexian', // Has phyrexian mana in its cost
        'prerelease', // Prerelease promos
        'promo', // Any promo cards
        'release', // Release promos
        'reserved', // On the reserved list
        'scryfallpreview', // Cards Scryfall got to preview to the community :)
        'spell', // It's an instant or sorcery
        'spotlight', // Story spotlight cards
        'transform', // Cards that transform
        'vanilla', // It's a vanilla creature (no abilities)
    ],
);