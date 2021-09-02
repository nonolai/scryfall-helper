import { Atom, COMPARISON_SEPARATORS } from 'atoms/atoms';

export const RARITY_VALUES = [
    'common',
    'uncommon',
    'rare',
    'special',
    'mythic',
    'bonus',
];

/** Atom for searching by rarity. */
export const RARITY_ATOM = new Atom(
    ['rarity', 'r'],
    [':', ...COMPARISON_SEPARATORS],
    RARITY_VALUES,
);