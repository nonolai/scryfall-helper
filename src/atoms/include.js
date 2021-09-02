import { Atom } from 'atoms/atoms';

/** Atom for controlling what is included in search results. */
export const INCLUDE_ATOM = new Atom(
    ['include'],
    [':'],
    [
        'extras', // include absolutely all cards
    ]
);