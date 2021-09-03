import { Atom } from 'atoms/atoms';

/** Atom for searching in oracle text. */
export const ORACLE_TEXT_ATOM = new Atom(
    ['oracle', 'o', 'fo'],
    [':'],
    [/* Free form input */],
);

/** Atom for searching in flavor text. */
export const FLAVOR_TEXT_ATOM = new Atom(
    ['flavor', 'ft'],
    [':'],
    [/* Free form input */],
);