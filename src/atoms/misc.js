import { Atom } from 'atoms/atoms';
import { FORMATS } from 'atoms/format';
import { GAMES } from 'atoms/games';
import { LANGUAGES } from 'atoms/language';
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
        ...GAMES,
        ...LANGUAGES,
    ]
);

const LAND_NICKNAMES = [
    'bikeland', 'cycleland', 'bicycleland', // 'Cycling 2'
    'bounceland', 'karoo', // 'Sacrifice it unless you bounce...'
    'canopyland', 'canland', // 1, T, Sac ~: Draw a card
    'checkland', // Enters tapped unless you control a $BASIC or $BASIC
    'dual', // The OGs
    'fastland', // Enters tapped if you have 3+ other lands
    'fetchland', // Pay 1 life, T, Sac ~: Search for a $BASIC or $BASIC
    'filterland', // Mana comes in, Mana comes out in fixed colors
    'gainland', // ETB, gain 1 life
    'painland', // T: Add colorless, T: add $C1 or $C2, take 1 damage
    'scryland', // ETB, scry 1
    'shadowland', // ETB reveal a $BASIC or $BASIC, or ETB tapped
    'shockland', // ETB pay 2 life or ETB tapped
    'storageland', // Storage counters
    'creatureland', 'manland', // Becomes a creature till EOT
    'triland', // ETB tapped, 3 colors (not Triomes)
    'triome', // Ikoria triome lands
    'tangoland', 'battleland', // ETB Tapped unless 2+ basics
];

/** Atom for searching by miscellaneous identity. */
export const IS_ATOM = new Atom(
    [
        'is',
        'not', // Negation of 'is', but with all the same possible values.
    ],
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
        'masterpiece', // Cards from the Masterpiece Series
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
        'reprint', // Cards that are reprints
        'scryfallpreview', // Cards Scryfall got to preview to the community :)
        'spell', // It's an instant or sorcery
        'spotlight', // Story spotlight cards
        'transform', // Cards that transform
        'vanilla', // It's a vanilla creature (no abilities)
        ...LAND_NICKNAMES,
    ],
);