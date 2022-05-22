import { Atom, COMPARISON_SEPARATORS } from 'atoms/atoms';

/**
 * Atom for searching by artist.
 *
 * TODO: Actually list all artists? If so, need multi-word value suggestions
 *   working.
 */
export const ARTIST_ATOM = new Atom(
    ['artist', 'a'],
    [':'],
    [/* Free form input */],
);

/** Atom for searching by artist count. */
export const ARTIST_COUNT_ATOM = new Atom(
    ['artists'],
    [':', ...COMPARISON_SEPARATORS],
    [/* Free form input */],
);

/** Atom for searching by illustration count. */
export const ILLUSTRATION_COUNT_ATOM = new Atom(
    ['illustrations'],
    [':', ...COMPARISON_SEPARATORS],
    [/* Free form input */],
);

/**
 * Atom for searching for cards by their watermark.
 *
 * Regenerate values with: python3 atom_generator.py watermark
 */
export const WATERMARK_ATOM = new Atom(
    ['watermark', 'wm'],
    [':'],
    // START_SECTION WATERMARK_ATOM_VALUES
    [
        'abzan',
        'agentsofsneak',
        'arena',
        'atarka',
        'azorius',
        'boros',
        'brokers',
        'cabaretti',
        'colorpie',
        'conspiracy',
        'crossbreedlabs',
        'dimir',
        'dromoka',
        'flavor',
        'fnm',
        'foretell',
        'golgari',
        'judgeacademy',
        'kolaghan',
        'lorehold',
        'maestros',
        'mardu',
        'mirran',
        'mtg',
        'ojutai',
        'orderofthewidget',
        'orzhov',
        'phyrexian',
        'planeswalker',
        'protour',
        'quandrix',
        'rakdos',
        'selesnya',
        'set',
        'silumgar',
        'simic',
        'sultai',
        'temur',
        'wotc',
    ],
    // END_SECTION WATERMARK_ATOM_VALUES
)