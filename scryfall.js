import { SuggestionService } from '/suggestions.js';
import { TYPE_ATOM } from '/atoms/type.js';

const suggestionService = new SuggestionService([TYPE_ATOM]);

/**
 * Initialize and wire up the Vue App component.
 */
const vm = new Vue({
    el: '#app',
    data: {
        // The current value of the search bar.
        query: '',
        // The current selected index in the list of suggestions.
        currentSuggestion: -1,
        // The index in query of the last splitter (either space or atom
        // splitter).
        lastSplitterIdx: -1,
    },
    computed: {
        suggestions: function () {
            this.currentSuggestion = 0;
            const { suggestions, lastSplitterIdx } =
                suggestionService.getSuggestions(this.query);
            this.lastSplitterIdx = lastSplitterIdx;
            return suggestions;
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
            document.getElementById('search-input').focus();
        },
    },
});
