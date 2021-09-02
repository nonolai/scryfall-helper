import { Atom } from 'atoms/atoms';

/** Atom for searching by miscellaneous characteristics. */
export const HAS_ATOM = new Atom(
    ['has'],
    [':'],
    [
        'indicator',  // Has a color indicator
    ]
);

/** Atom for searching by miscellaneous identity. */
export const IS_ATOM = new Atom(
    ['is'],
    [':'],
    [
        'dfc', // Double-faced cards
        'flip', // Flip cards
        'frenchvanilla', // Creature with only keyword abilities
        'funny', // Un-sets, holiday, and other funny cards
        'historic', // It's legendary, an artifact, or a saga
        'hybrid', // Has hybrid mana in its cost
        'leveler', // Cards w/ level up
        'mdfc', // Modal double-faced cards
        'meld', // Cards that meld
        'party', // It's a cleric, rogue, warrior, or wizard
        'permanent', // It's... it's a permanent
        'phyrexian', // Has phyrexian mana in its cost
        'spell', // It's an instant or sorcery
        'transform', // Cards that transform
        'vanilla', // It's a vanilla creature (no abilities)
    ],
);