import { Trie } from 'utils/trie';

/**
 * A single suggestion to display in the UI
 * @param value The full value of the suggestion
 * @param toAppend The string needed to append to the current query to include
 *     the suggestion.
 */
export class Suggestion {
    constructor(value, toAppend) {
        this.value = value;
        this.toAppend = toAppend;
    }
}

/** Utility for getting suggestions from a set of installed Atoms. */
export class SuggestionService {
    constructor(atoms) {
        this.atoms = new Trie();
        this.atomsByName = new Map();
        for (const atom of atoms) {
            this.atoms.insert(atom.key);
            this.atomsByName.set(atom.key, atom);
        }
    }

    /**
     * Get the list of suggestions for the given search query.
     *
     * @param {string} query The user's current search query.
     * @param {number} maxResults Maximum number of results to display.
     * @returns An ordered list of Suggestion objects.
     */
    getSuggestions(query, maxResults = 5) {
        if (!query) {
            return [];
        }

        const parts = query.split(' ');
        const lastToken = parts[parts.length - 1];
        if (!lastToken) {
            return [];
        }

        // TODO: Replace with any separator?
        if (!lastToken.includes(':')) {
            return this.atoms
                .find(lastToken.toLowerCase())
                .slice(0, maxResults)
                .map(
                    suggestion =>
                        new Suggestion(
                            suggestion,
                            suggestion.substr(lastToken.length),
                        ),
                );
        }

        const [atom, partialValue] = lastToken.split(':');
        if (!partialValue) {
            return [];
        }

        const currentAtom = this.atomsByName.get(atom);
        if (!currentAtom) {
            return [];
        }

        const possibleValues = currentAtom.values;
        if (!possibleValues || !possibleValues.length) {
            return [];
        }

        return possibleValues
            .find(partialValue.toLowerCase())
            .slice(0, maxResults)
            .map(
                suggestion =>
                    new Suggestion(
                        suggestion,
                        suggestion.substr(partialValue.length),
                    ),
            );
    }
}
