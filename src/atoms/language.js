import { Atom } from 'atoms/atoms';

export const LANGUAGES = [
    'en',        // English
    'es', 'sp',  // Spanish
    'fr',        // French
    'de',        // German
    'it',        // Italian
    'pt',        // Portuguese
    'ja', 'jp',  // Japanese
    'ko', 'kr',  // Korean
    'ru',        // Russian
    'zhs', 'cs', // Simplified Chinese
    'zht', 'ct', // Traditional Chinese
    'he',        // Hebrew
    'la',        // Latin
    'grc',       // Ancient Greek
    'ar',        // Arabic
    'sa',        // Sanskrit
    'ph',        // Phyrexian
];

/**
 * Atom for searching based on a card's language availability.
 * 
 * https://scryfall.com/docs/api/languages
 */
export const LANGUAGE_ATOM = new Atom(
    ['language', 'lang'],
    [':'],
    [
        'any',       // Forces search results to include cards in any language
        ...LANGUAGES,
    ],
);
