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
 * Code for getting the full list of (uncategorized) watermarks:
 * 
 * ```python
 * import requests
 * ENDPOINT = 'https://api.scryfall.com/cards/search?q=has%3Awm'
 * print(
 *     set(
 *         filter(
 *             None,
 *             [
 *                 (card['watermark'] if 'watermark' in card else None)
 *                 for card in requests.get(ENDPOINT).json()['data']
 *             ],
 *         ),
 *     )
 * )
 * ```
 */
export const WATERMARK_ATOM = new Atom(
    ['watermark', 'wm'],
    [':'],
    [
        'set',
        // Brand
        'colorpie',
        'mtg',
        'planeswalker',
        'wotc',
        // Judge
        'judgeacademy',
        // Organized Play
        'arena',
        'fnm',
        'protour',
        // Guilds
        'azorius',
        'boros',
        'dimir',
        'golgari',
        'gruul',
        'izzet',
        'orzhov',
        'rakdos',
        'selesnya',
        'simic',
        // Mirrodin
        'mirran',
        'phyrexian',
        // Strixhaven Schools
        'lorehold',
        'prismari',
        'quandrix',
        'silverquill',
        // Tarkir Clans
        'abzan',
        'jeskai',
        'mardu',
        'sultai',
        'temur',
        // Tarkir Dragons
        'atarka',
        'dromoka',
        'kolaghan',
        'ojutai',
        'silumgar',
        // Unhinged
        'flavor',
        // Unstable
        'agentsofsneak',
        'crossbreedlabs',
        'orderofthewidget',
        // Conspiracy
        'conspiracy',
        // Mechanic-specific
        'foretell',
    ],
)