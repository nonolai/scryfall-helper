import { Atom } from 'atoms/atoms';

/** Atom for searching based on card border type. */
export const BORDER_ATOM = new Atom(
    ['border'],
    [':'],
    [
        'black',
        'white',
        'silver',
        'borderless',
    ],
);

/** Atom for searching based on card frame type. */
export const FRAME_ATOM = new Atom(
    ['frame'],
    [':'],
    [
        '1993',
        '1997',
        '2003',
        '2015',
        'colorshifted',
        'future',
        'legendary',
        'nyxtouched',
        'tombstone',
    ],
);