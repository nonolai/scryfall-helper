/** What portion of a search query is being suggested. */
export const SuggestionType = Object.freeze({
    NAME: 'Name',
    SEPARATOR: 'Sep',
    VALUE: 'Value',
});

/**
 * A single suggestion to display in the UI.
 *
 * @param {SuggestionType} type The SuggestionType of this suggestion
 * @param {string} value The full value of the suggestion
 * @param {string} toAppend The string needed to append to the current query to
 *     include the suggestion.
 */
export class Suggestion {
    constructor(type, value, toAppend) {
        this.type = type;
        this.value = value;
        this.toAppend = toAppend;
    }
}
