import { Atom, COMPARISON_SEPARATORS } from 'atoms/atoms';

function getCountAtom(names) {
    return new Atom(
        names,
        [':', ...COMPARISON_SEPARATORS],
        [/* Free form input */],
    );
}

/** Atom for searching based on how many times a card has been printed. */
export const PRINT_COUNT_ATOM = getCountAtom(['prints']);

/** Atom for searching basd on how many sets a card has been in. */
export const SET_COUNT_ATOM = getCountAtom(['sets']);

/** PRINT_COUNT_ATOM but for paper only. */
export const PAPER_PRINT_COUNT_ATOM = getCountAtom(['paperprints']);

/** SET_COUNT_ATOM but for paper only. */
export const PAPER_SET_COUNT_ATOM = getCountAtom(['papersets']);