import { Trie } from 'utils/trie';

const SuggestionType = { NONE: 0, ATOM: 1, VALUE: 2 };

class SuggestionData {
    constructor(type, suggestions, lastSplitterIdx) {
        this.type = type;
        this.suggestions = suggestions;
        this.lastSplitterIdx = lastSplitterIdx;
    }
}

export class SuggestionService {
    constructor(atoms) {
        this.atoms = new Trie();
        this.atomsByName = new Map();
        for (const atom of atoms) {
            this.atoms.insert(atom.key);
            this.atomsByName.set(atom.key, atom);
        }
    }

    getSuggestions(query, maxResults = 5) {
        if (!query) {
            return new SuggestionData([], null);
        }

        const parts = query.split(' ');
        const lastToken = parts[parts.length - 1];
        if (!lastToken) {
            // probably wrong idx
            return new SuggestionData(
                SuggestionType.NONE,
                [],
                query.length - 1,
            );
        }

        // TODO: Replace with any separator?
        if (!lastToken.includes(':')) {
            return new SuggestionData(
                SuggestionType.ATOM,
                this.atoms.find(lastToken.toLowerCase()).slice(0, maxResults),
                query.length - lastToken.length,
            );
        }

        const [atom, partialValue] = lastToken.split(':');
        if (!partialValue) {
            return new SuggestionData(SuggestionType.NONE, [], null);
        }

        const currentAtom = this.atomsByName.get(atom);
        if (!currentAtom) {
            return new SuggestionData(SuggestionType.NONE, [], null);
        }

        const splitterIdx = query.length - partialValue.length;
        const possibleValues = currentAtom.values;
        if (!possibleValues || !possibleValues.length) {
            return new SuggestionData(SuggestionType.NONE, [], splitterIdx);
        }

        return new SuggestionData(
            SuggestionType.VALUE,
            possibleValues
                .find(partialValue.toLowerCase())
                .slice(0, maxResults),
            splitterIdx,
        );
    }
}
