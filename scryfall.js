const suggestionService = new SuggestionService(ALL_ATOMS);

/**
 * Initialize and wire up the Vue App component.
 */
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
            const suggestionData = suggestionService.getSuggestions(this.query);
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
            document.getElementById('search-input').focus();
        },
    },
});
