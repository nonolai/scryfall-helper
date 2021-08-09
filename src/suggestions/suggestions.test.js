import {
    SuggestionType,
    SuggestionData,
    SuggestionService,
} from 'suggestions/suggestions';
import { Atom } from 'atoms/atoms';

const NONE_SUGGESTION = new SuggestionData(SuggestionType.NONE, [], null);

describe('SuggestionService', () => {
    ////////////////////////////////////////////////////////////////////////////
    //  General/Misc

    test('returns no suggestions on false-y input', () => {
        const testAtom = new Atom('test', 't', [':'], ['aaa']);
        const underTest = new SuggestionService([testAtom]);

        expect(underTest.getSuggestions('')).toStrictEqual(NONE_SUGGESTION);
        expect(underTest.getSuggestions(null)).toStrictEqual(NONE_SUGGESTION);
        expect(underTest.getSuggestions(undefined)).toStrictEqual(
            NONE_SUGGESTION,
        );
    });

    test('ignores all but the last atom', () => {
        const testAtom = new Atom('test', 't', [':'], ['aaa', 'bbb']);
        const underTest = new SuggestionService([testAtom]);

        // First search term would generate suggestion for 'aaa'.
        expect(underTest.getSuggestions('test:aa test:bb')).toStrictEqual(
            new SuggestionData(
                SuggestionType.VALUE,
                ['bbb'],
                'test:aa test:'.length,
            ),
        );
    });

    ////////////////////////////////////////////////////////////////////////////
    //  Atom Suggestions

    test('returns the only matching suggestion for an atom', () => {
        const alpha = new Atom('alpha', 'a', [':'], ['foo']);
        const beta = new Atom('beta', 'b', [':'], ['bar']);
        const underTest = new SuggestionService([alpha, beta]);

        expect(underTest.getSuggestions('alp')).toStrictEqual(
            new SuggestionData(SuggestionType.ATOM, ['alpha'], 0),
        );
    });

    test('returns all matching suggestions for an atom', () => {
        const alfalfa = new Atom('alfalfa', 'al', [':'], ['bar']);
        const alpha = new Atom('alpha', 'a', [':'], ['foo']);
        const beta = new Atom('beta', 'b', [':'], ['baz']);
        const underTest = new SuggestionService([alfalfa, alpha, beta]);

        expect(underTest.getSuggestions('al')).toStrictEqual(
            new SuggestionData(SuggestionType.ATOM, ['alfalfa', 'alpha'], 0),
        );
    });

    test('returns sorted atom suggestions despite atom order', () => {
        const alfalfa = new Atom('alfalfa', 'al', [':'], ['bar']);
        const alpha = new Atom('alpha', 'a', [':'], ['foo']);
        const beta = new Atom('beta', 'b', [':'], ['baz']);
        // Alpha should come after in suggestions but is added first
        const underTest = new SuggestionService([alpha, alfalfa, beta]);

        expect(underTest.getSuggestions('al')).toStrictEqual(
            new SuggestionData(SuggestionType.ATOM, ['alfalfa', 'alpha'], 0),
        );
    });

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

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual(
            new SuggestionData(
                SuggestionType.VALUE,
                ['apple'],
                'alpha:'.length,
            ),
        );
    });

    test('returns all matching suggestions for a value', () => {
        const alpha = new Atom(
            'alpha',
            'a',
            [':'],
            ['apple', 'apricot', 'banana'],
        );
        const underTest = new SuggestionService([alpha]);

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual(
            new SuggestionData(
                SuggestionType.VALUE,
                ['apple', 'apricot'],
                'alpha:'.length,
            ),
        );
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

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual(
            new SuggestionData(
                SuggestionType.VALUE,
                ['apple', 'apricot'],
                'alpha:'.length,
            ),
        );
    });
});
