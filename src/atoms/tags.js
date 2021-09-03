import { Atom } from 'atoms/atoms';

/** Atom for searching based on illustration contents. */
export const ART_TAG_ATOM = new Atom(
    ['art', 'atag', 'arttag'],
    [':'],
    [/* Free form input */],
);

/** Atom for searching based on function tags. */
export const FUNCTION_TAG_ATOM = new Atom(
    ['function', 'otag', 'oracletag'],
    [':'],
    [/* Free form input */],
);