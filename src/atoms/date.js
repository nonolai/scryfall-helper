import { Atom, COMPARISON_SEPARATORS } from 'atoms/atoms';
import { SET_CODES } from 'atoms/sets';

/** Atom for searching based on release date. */
export const DATE_ATOM = new Atom(
    ['date', 'year'],
    [':', ...COMPARISON_SEPARATORS],
    [
        ...SET_CODES,
    ],
);