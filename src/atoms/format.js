import { Atom } from 'atoms/atoms';

const FORMATS = [
    'standard',
    'future',
    'historic',
    'gladiator',
    'pioneer',
    'modern',
    'legacy',
    'pauper',
    'vintage',
    'penny',
    'commander',
    'brawl',
    'historicbrawl',
    'paupercommander',
    'duel',
    'oldschool',
    'premodern',
]

/** Atom for searching by format legality. */
export const FORMAT_ATOM = new Atom(
    ['format', 'f', 'banned', 'restricted'],
    [':'],
    FORMATS,
);