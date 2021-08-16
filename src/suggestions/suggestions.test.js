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
    //  Construction Assertions

    test('fails to construct if multiple atoms share keyword', () => {
        const alpha1 = new Atom('alpha', 'a', [':'], ['foo']);
        const alpha2 = new Atom('alpha', 'al', [':'], ['foo']);

        expect(() => {
            new SuggestionService([alpha1, alpha2]);
        }).toThrow('Attempted to add second atom with key: alpha');
    });

    test('fails to construct if multiple atoms share shortname', () => {
        const alpha1 = new Atom('alpha1', 'a', [':'], ['foo']);
        const alpha2 = new Atom('alpha2', 'a', [':'], ['foo']);

        expect(() => {
            new SuggestionService([alpha1, alpha2]);
        }).toThrow('Attempted to add second atom with short name: a');
    });

    test('fails to construct if any atom is missing separators', () => {
        const underTest = new Atom('alpha', 'a', [/* Missing */], ['foo']);

        expect(() => {
            new SuggestionService([underTest]);
        }).toThrow('Attempted to add atom without separators');
    });

    test('fails to construct if any atom is missing values', () => {
        const underTest = new Atom('alpha', 'a', [':'], [/* Missing */]);

        expect(() => {
            new SuggestionService([underTest]);
        }).toThrow('Attempted to add atom without values');
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

    ////////////////////////////////////////////////////////////////////////////
    //  Shortname Suggestions

    /* TODO */

    ////////////////////////////////////////////////////////////////////////////
    //  Separator Suggestions

    test('returns separator suggestions after atom is filled', () => {
        const testAtom = new Atom('test', 't', ['s1', 's2'], ['value']);
        const underTest = new SuggestionService([testAtom]);

        expect(underTest.getSuggestions('test')).toStrictEqual([
            new Suggestion('tests2', 's1'),
            new Suggestion('tests1', 's2'),
        ]);
    });

    test('returns separator and atoms the query is a substr of', () => {
        const testAtom = new Atom('test', 't', ['s1', 's2'], ['value']);
        const longerTestAtom = new Atom('testasdf', 'te', [':'], ['value']);
        const underTest = new SuggestionService([testAtom, longerTestAtom]);

        expect(underTest.getSuggestions('test')).toStrictEqual([
            new Suggestion('tests2', 's1'),
            new Suggestion('tests1', 's2'),
            new Suggestion('testasdf', 'asdf'),
        ]);
    });

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

    test('returns suggestions even if atom capitalization mismatches', () => {
        const alpha = new Atom('alpha', 'a', [':'], ['apple', 'apricot']);
        const underTest = new SuggestionService([alpha]);

        expect(underTest.getSuggestions('Alpha:ap')).toStrictEqual([
            new Suggestion('apple', 'ple'),
            new Suggestion('apricot', 'ricot'),
        ])
    })
});
