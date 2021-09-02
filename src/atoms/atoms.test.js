import { Suggestion, SuggestionType } from 'suggestions/suggestion';
import { Atom } from 'atoms/atoms';

describe('Atom', () => {
    ////////////////////////////////////////////////////////////////////////////
    //  General/Misc

    test('returns no suggestions on false-y input', () => {
        const underTest = new Atom(['test', 't'], [':'], ['aaa']);

        expect(underTest.getSuggestions('')).toStrictEqual([]);
        expect(underTest.getSuggestions(null)).toStrictEqual([]);
        expect(underTest.getSuggestions(undefined)).toStrictEqual([]);
    });

    ////////////////////////////////////////////////////////////////////////////
    //  Name Suggestions

    test('returns the only matching suggestion for a name', () => {
        const underTest = new Atom(['alpha', 'a'], [':'], ['foo']);

        expect(underTest.getSuggestions('alp')).toStrictEqual([
            new Suggestion(SuggestionType.NAME, 'alpha', 'ha'),
        ]);
    });

    test('returns all matching suggestions for an atom', () => {
        const underTest = new Atom(['alfalfa', 'alph', 'af'], [':'], ['bar']);

        expect(underTest.getSuggestions('al')).toStrictEqual([
            new Suggestion(SuggestionType.NAME, 'alfalfa', 'falfa'),
            new Suggestion(SuggestionType.NAME, 'alph', 'ph'),
        ]);
    });

    ////////////////////////////////////////////////////////////////////////////
    //  Separator Suggestions

    test('returns separator suggestions after atom is filled', () => {
        const underTest = new Atom(['test', 't'], ['s1', 's2'], ['value']);

        expect(underTest.getSuggestions('test')).toStrictEqual([
            new Suggestion(SuggestionType.SEPARATOR, 's1', 's1'),
            new Suggestion(SuggestionType.SEPARATOR, 's2', 's2'),
        ]);
    });

    test('returns separators and atoms the query is a substr of', () => {
        const underTest = new Atom(['test', 'te'], ['s1', 's2'], ['value'])

        expect(underTest.getSuggestions('te')).toStrictEqual([
            new Suggestion(SuggestionType.SEPARATOR, 's1', 's1'),
            new Suggestion(SuggestionType.SEPARATOR, 's2', 's2'),
            new Suggestion(SuggestionType.NAME, 'test', 'st'),
        ]);
    });

    ////////////////////////////////////////////////////////////////////////////
    //  Value Suggestions

    test('returns the only matching suggestion for a value', () => {
        const underTest = new Atom(['alpha', 'a'], [':'], ['apple', 'banana']);

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'apple', 'ple'),
        ]);
    });

    test('returns all matching suggestions for a value', () => {
        const underTest = new Atom(
            ['alpha', 'a'],
            [':'],
            ['apple', 'apricot', 'banana'],
        );

        expect(underTest.getSuggestions('alpha:ap')).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'apple', 'ple'),
            new Suggestion(SuggestionType.VALUE, 'apricot', 'ricot'),
        ]);
    });

    test('returns suggestions even if atom capitalization mismatches', () => {
        const underTest = new Atom(['alpha', 'a'], [':'], ['apple', 'apricot']);

        expect(underTest.getSuggestions('Alpha:ap')).toStrictEqual([
            new Suggestion(SuggestionType.VALUE, 'apple', 'ple'),
            new Suggestion(SuggestionType.VALUE, 'apricot', 'ricot'),
        ]);
    });

    ////////////////////////////////////////////////////////////////////////////
    //  Combo Suggestions
    test(
        'returns the name and separator suggestions if short name is matched',
        () => {
            // TODO!
            expect(true).toBeTruthy();
        },
    );
});
