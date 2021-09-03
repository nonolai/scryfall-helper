import { Atom } from 'atoms/atoms';

export const GAMES = [
    'paper',
    'mtgo',
    'arena',
];

/** Atom for searching based on card availability in a particular game. */
export const GAMES_ATOM = new Atom(
    ['game'],
    [':'],
    GAMES,
);