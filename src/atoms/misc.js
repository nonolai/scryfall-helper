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
        'hybrid', // Has hybrid mana in its cost
        'phyrexian', // Has phyrexian mana in its cost
    ],
);