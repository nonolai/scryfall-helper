import { Atom } from 'atoms/atoms';


/** Atom for controlling how duplicate results are eliminated. */
export const UNIQUE_ATOM = new Atom(
    ['unique'],
    [':'],
    [
        'art',
        'cards', // default
        'prints',
    ],
);

/** Separatorless shortcuts for the UNIQUE_ATOM. */
export const UNIQUE_SHORTCUTS_ATOM = new Atom(
    ['++', '@@'], [/** No separators */], [/** No values */],
);

/** Atom for controlling the form of the results page. */
export const DISPLAY_ATOM = new Atom(
    ['display'],
    [':'],
    [
        'grid',
        'checklist',
        'full',
        'text',
    ],
);

/** Atom for controlling the order of the results page. */
export const ORDER_ATOM = new Atom(
    ['order'],
    [':'],
    [
        'artist',
        'cmc',
        'color',
        'edhrec',
        'eur',
        'name',
        'power',
        'rarity',
        'released',
        'review',
        'set',
        'spoiled',
        'tix',
        'toughness',
        'usd',
    ],
);

/** Atom for controlling which printing of a card to pick by default. */
export const PREFER_ATOM = new Atom(
    ['prefer'],
    [':'],
    [
        'oldest',
        'newest',
        'usd-low',
        'usd-high',
        'eur-low',
        'eur-high',
        'tix-low',
        'tix-high',
        'promo',
    ],
);

/** Atom for controlling the order of sorted data. */
export const DIRECTION_ATOM = new Atom(
    ['direction'],
    [':'],
    [
        'asc',
        'desc',
    ],
);