import { SuggestionData, SuggestionService } from 'suggestions/suggestions';
import { Atom } from 'atoms/atoms';

describe('SuggestionService', () => {
    test('should return empty suggestions when missing', () => {
        const testAtom = new Atom("test", "t", [":", ">>"], ["aaa", "bbb", "ccc"]);
        const underTest = new SuggestionService([testAtom]);
        const expected = new SuggestionData(1, [], 0);
        expect(underTest.getSuggestions("foo")).toStrictEqual(expected);
    });
});