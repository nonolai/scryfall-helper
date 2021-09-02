import { Atom } from 'atoms/atoms';

/** Atom for searching for cards that were printed in a new way.  */
export const NEW_ATOM = new Atom(
    ['new'],
    [':'],
    [
        'art',
        'artist',
        'flavor',
        'frame',
        'language',
        'rarity',
    ]
);