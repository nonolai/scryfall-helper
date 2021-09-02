import { Suggestion, SuggestionType } from 'suggestions/suggestion';
import { SuggestionService } from 'suggestions/suggestions';
import { Atom } from 'atoms/atoms';

/** Stubs out the behavior of the underlying atom with preloaded responses. */
class StubAtom {
    constructor(suggestions) {
        this.suggestions = suggestions;
    }

    getSuggestions(query) {
        return this.suggestions;
    }
}

describe('SuggestionService', () => {
    test('returns no suggestions on false-y input', () => {
        const throwingAtom = {
            getSuggestions: function (_query) {
                throw 'fake atom should not have been called';
            }
        }
        const underTest = new SuggestionService([throwingAtom]);

        expect(underTest.getSuggestions('')).toStrictEqual([]);
        expect(underTest.getSuggestions(null)).toStrictEqual([]);
        expect(underTest.getSuggestions(undefined)).toStrictEqual([]);
    });

    test('ignores all but the last atom', () => {
        const testAtom = new Atom(['test', 't'], [':'], ['aaa', 'bbb']);
        const underTest = new SuggestionService([testAtom]);

        // First search term would generate suggestion for 'aaa'.
        expect(underTest.getSuggestions('test:aa test:bb')).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'bbb', 'b'),
        ]);
    });

    test('gets suggestions for atoms prefixed with minus', () => {
        const testAtom = new Atom(['test', 't'], [':'], ['aaa', 'bbb']);
        const underTest = new SuggestionService([testAtom]);

        expect(underTest.getSuggestions('-test:bb')).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'bbb', 'b'),
        ]);
    });

    test('gets suggestions for multiple atoms', () => {
        const testAtomA = new Atom(['test'], [':'], ['aaa', 'bbb']);
        const testAtomB = new Atom(['terrible'], [':'], ['aaa', 'bbb']);
        const underTest = new SuggestionService([testAtomA, testAtomB]);

        expect(underTest.getSuggestions('te')).toStrictEqual([
            new Suggestion(SuggestionType.NAME, 'terrible', 'rrible'),
            new Suggestion(SuggestionType.NAME, 'test', 'st'),
        ]);
    });

    test('sorts suggestions by value', () => {
        const stubAtom = new StubAtom(
            ['a', 'bbb', 'as'].map(
                x => new Suggestion(SuggestionType.VALUE, x, x)));
        const underTest = new SuggestionService([stubAtom]);
        expect(underTest.getSuggestions('unused')).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'a', 'a'),
            new Suggestion(SuggestionType.VALUE, 'as', 'as'),
            new Suggestion(SuggestionType.VALUE, 'bbb', 'bbb'),
        ]);
    });

    test('trims results to max length', () => {
        const stubAtom = new StubAtom(
            ['a', 'as', 'bbb'].map(
                x => new Suggestion(SuggestionType.VALUE, x, x)));
        const underTest = new SuggestionService([stubAtom]);
        expect(underTest.getSuggestions('unused', 1)).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'a', 'a'),
        ]);
    });

    test('returns sorted-first elements even if they were returned late',
        () => {
            const stubAtom = new StubAtom(
                // 'a' is last, and would otherwise be trimmed.
                ['as', 'bbb', 'a'].map(
                    x => new Suggestion(SuggestionType.VALUE, x, x)));
            const underTest = new SuggestionService([stubAtom]);
            expect(underTest.getSuggestions('unused', 1)).toStrictEqual([
                new Suggestion(SuggestionType.VALUE, 'a', 'a'),
            ]);
        },
    );
});
