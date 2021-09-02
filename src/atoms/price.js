import { Atom, COMPARISON_SEPARATORS } from 'atoms/atoms';

/** Atom for searching by price. */
export const PRICE_ATOM = new Atom(
    ['usd', 'eur', 'tix'],
    [...COMPARISON_SEPARATORS],
    [/* Free form input */],
);

/** Atom for finding the cheapest versions of cards. */
export const CHEAPEST_ATOM = new Atom(
    ['cheapest'],
    [':'],
    [
        'usd',
        'eur',
        'tix',
    ]
)