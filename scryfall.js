// Load atoms and values into prefix trees.
const atoms = new Trie();
const atomToValues = new Map();
for (const atom of ALL_ATOMS) {
    atoms.insert(atom.key);
    if (atom.values.length) {
        const values = new Trie();
        for (const possibleValue of atom.values) {
            values.insert(possibleValue);
        }
        atomToValues.set(atom.key, values);
    }
}

class SuggestionData {
    constructor(suggestions, lastSplitterIdx) {
        this.suggestions = suggestions;
        this.lastSplitterIdx = lastSplitterIdx;
    }
}

function getSuggestions(query, maxResults = 5) {
    if (!query) {
        return new SuggestionData([], null);
    }

    const parts = query.split(' ');
    const lastToken = parts[parts.length - 1];
    if (!lastToken) {
        // probably wrong idx
        return new SuggestionData([], query.length - 1);
    }

    // TODO: Replace with any separator?
    if (!lastToken.includes(':')) {
        return new SuggestionData(
            atoms.find(lastToken.toLowerCase()).slice(0, maxResults),
            query.length - lastToken.length,
        );
    }

    [atom, partialValue] = lastToken.split(':');
    /*if (!partialValue) {
    return new SuggestionData([], query.length - 1);
  }*/

    const splitterIdx = query.length - partialValue.length;
    possibleValues = atomToValues.get(atom);
    if (!possibleValues || !possibleValues.length) {
        return new SuggestionData([], splitterIdx);
    }

    return new SuggestionData(
        possibleValues.find(partialValue.toLowerCase()).slice(0, maxResults),
        splitterIdx,
    );
}

const vm = new Vue({
    el: '#app',
    data: {
        query: '',
        currentSuggestion: -1,
        lastSplitterIdx: -1,
    },
    computed: {
        suggestions: function () {
            this.currentSuggestion = 0;
            const suggestionData = getSuggestions(this.query);
            this.lastSplitterIdx = suggestionData.lastSplitterIdx;
            return suggestionData.suggestions;
        },
    },
    methods: {
        takeSuggestion: function () {
            if (
                this.suggestions &&
                this.suggestions.length > this.currentSuggestion
            ) {
                const presplitter = this.query.substring(
                    0,
                    this.lastSplitterIdx,
                );
                this.query =
                    presplitter + this.suggestions[this.currentSuggestion];
            }
        },
        submit: function () {
            const uri =
                'https://scryfall.com/search?q=' + encodeURI(this.query);
            location.href = uri;
        },
        suggestionClick: function (index) {
            this.currentSuggestion = index;
            this.takeSuggestion();
            // TODO: replace this with a this.$refs when moved to an actual js project
            document.getElementById('search-input').focus();
        },
    },
});
