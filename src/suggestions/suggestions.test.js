import { Suggestion, SuggestionService } from 'suggestions/suggestions';
import { Atom } from 'atoms/atoms';

describe('SuggestionService', () => {
    ////////////////////////////////////////////////////////////////////////////
    //  General/Misc

    test('returns no suggestions on false-y input', () => {
        const testAtom = new Atom('test', 't', [':'], ['aaa']);
        const underTest = new SuggestionService([testAtom]);

        expect(underTest.getSuggestions('')).toStrictEqual([]);
        expect(underTest.getSuggestions(null)).toStrictEqual([]);
        expect(underTest.getSuggestions(undefined)).toStrictEqual([]);
    });

    test('ignores all but the last atom', () => {
        const testAtom = new Atom('test', 't', [':'], ['aaa', 'bbb']);
        const underTest = new SuggestionService([testAtom]);

        // First search term would generate suggestion for 'aaa'.
        expect(underTest.getSuggestions('test:aa test:bb')).toStrictEqual([
            new Suggestion('bbb', 'b'),
        ]);
    });

    ////////////////////////////////////////////////////////////////////////////
    //  Atom Suggestions

    test('returns the only matching suggestion for an atom', () => {
        const alpha = new Atom('alpha', 'a', [':'], ['foo']);
        const beta = new Atom('beta', 'b', [':'], ['bar']);
        const underTest = new SuggestionService([alpha, beta]);

        expect(underTest.getSuggestions('alp')).toStrictEqual([
            new Suggestion('alpha', 'ha'),
        ]);
    });

    test('returns all matching suggestions for an atom', () => {
        const alfalfa = new Atom('alfalfa', 'al', [':'], ['bar']);
        const alpha = new Atom('alpha', 'a', [':'], ['foo']);
        const beta = new Atom('beta', 'b', [':'], ['baz']);
        const underTest = new SuggestionService([alfalfa, alpha, beta]);

        expect(underTest.getSuggestions('al')).toStrictEqual([
            new Suggestion('alfalfa', 'falfa'),
            new Suggestion('alpha', 'pha'),
        ]);
    });

    test('returns sorted atom suggestions despite atom order', () => {
        const alfalfa = new Atom('alfalfa', 'al', [':'], ['bar']);
        const alpha = new Atom('alpha', 'a', [':'], ['foo']);
        const beta = new Atom('beta', 'b', [':'], ['baz']);
        // Alpha should come after in suggestions but is added first
        const underTest = new SuggestionService([alpha, alfalfa, beta]);

        expect(underTest.getSuggestions('al')).toStrictEqual([
            new Suggestion('alfalfa', 'falfa'),
            new Suggestion('alpha', 'pha'),
        ]);
    });

    // TODO: Doesn't display atom if there is only one suggestion and it
    //     completely matches the search query? "Ty<tab>" Skip to separators?

    ////////////////////////////////////////////////////////////////////////////
    //  Shortname Suggestions

    /* TODO */

    ////////////////////////////////////////////////////////////////////////////
    //  Separator Suggestions

    /* TODO */

    ////////////////////////////////////////////////////////////////////////////
    //  Value Suggestions

    test('returns the only matching suggestion for a value', () => {
        const alpha = new Atom('alpha', 'a', [':'], ['apple', 'banana']);
        const underTest = new SuggestionService([alpha]);

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual([
            new Suggestion('apple', 'ple'),
        ]);
    });

    test('returns all matching suggestions for a value', () => {
        const alpha = new Atom(
            'alpha',
            'a',
            [':'],
            ['apple', 'apricot', 'banana'],
        );
        const underTest = new SuggestionService([alpha]);

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual([
            new Suggestion('apple', 'ple'),
            new Suggestion('apricot', 'ricot'),
        ]);
    });

    test('returns sorted value suggestions despite value order', () => {
        const alpha = new Atom(
            'alpha',
            'a',
            [':'],
            // Apricot should come after apple, but is added first.
            ['apricot', 'apple', 'banana'],
        );
        // Alpha should come after in suggestions but is added first
        const underTest = new SuggestionService([alpha]);

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual([
            new Suggestion('apple', 'ple'),
            new Suggestion('apricot', 'ricot'),
        ]);
    });

    // TODO: Returns values when atom capitalization mismatches i.e. 'Type:'
});
