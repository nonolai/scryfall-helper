import { Atom, COMPARISON_SEPARATORS } from 'atoms/atoms';

const INDIVIDUAL_COLORS = [
    'white', 'blue', 'black', 'red', 'green', 'colorless',
];
const NICKNAMES = [
    'azorius', // WU
    'orzhov', 'silverquill', // WB
    'boros', 'lorehold', // WR
    'selesnya', // WG
    'dimir', // UB
    'izzet', 'prismari', // UR
    'simic', 'quandrix', // UG
    'rakdos', // BR
    'golgari', // BG
    'gruul', // RG
    'esper', 'obscura', // WUB
    'jeskai', // WUR
    'bant', 'brokers', // WUG
    'mardu', // WBR
    'abzan', // WBG
    'naya', 'cabaretti', // WRG
    'grixis', 'maestros', // UBR
    'sultai', // UBG
    'jund', 'riveteers', // BRG
    'artifice', // WUBR
    'growth', // WUBG
    'altruism', // WURG
    'aggression', // WBRG
    'chaos', // UBRG
    'all', // WUBRG
];
const ALL_COLOR_VALUES = [
    ...INDIVIDUAL_COLORS,
    ...NICKNAMES,
];

/**
 * Atom for searching by color.
 *
 * Note: Does not suggest individual color letters or combinations (i.e. 'r',
 * 'bg', etc.).
 */
export const COLOR_ATOM = new Atom(
    ['color', 'c'],
    [':', ...COMPARISON_SEPARATORS],
    ALL_COLOR_VALUES,
);

/**
 * Atom for searching by color identity.
 *
 * Note: Does not suggest individual color letters or combinations (i.e. 'r',
 * 'bg', etc.).
 */
export const COLOR_IDENTITY_ATOM = new Atom(
    ['commander', 'identity', 'id'],
    [':', ...COMPARISON_SEPARATORS],
    ALL_COLOR_VALUES,
);
