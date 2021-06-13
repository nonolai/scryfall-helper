<template>
    <div>
        <form class="search-container" @submit.prevent="submit">
            <input
                id="search-input"
                class="form-control"
                v-model="query"
                placeholder="Search Scryfall..."
                @keydown.tab.prevent
                @keyup.tab="takeSuggestion"
                @keydown.up="
                    currentSuggestion =
                        (currentSuggestion + suggestions.length - 1) %
                        suggestions.length
                "
                @keydown.down="
                    currentSuggestion =
                        (currentSuggestion + 1) % suggestions.length
                "
                autofocus
            />
        </form>
        <ul class="list-group">
            <button
                class="list-group-item list-group-item-action suggestion-item"
                :class="{ active: index === currentSuggestion }"
                v-for="(suggestion, index) in suggestions"
                :key="suggestion"
                @click="suggestionClick(index)"
            >
                {{ suggestion }}
            </button>
        </ul>
    </div>
</template>

<script>
import { SuggestionService } from 'suggestions/suggestions';
import { TYPE_ATOM } from 'atoms/type';

const suggestionService = new SuggestionService([TYPE_ATOM]);

export default {
    data: function() {
        return {
            // The current value of the search bar.
            query: '',
            // The current selected index in the list of suggestions.
            currentSuggestion: -1,
            // The index in query of the last splitter (either space or atom
            // splitter).
            lastSplitterIdx: -1,
        };
    },
    computed: {
        suggestions: function() {
            this.currentSuggestion = 0;
            const {
                suggestions,
                lastSplitterIdx,
            } = suggestionService.getSuggestions(this.query);
            this.lastSplitterIdx = lastSplitterIdx;
            return suggestions;
        },
    },
    methods: {
        takeSuggestion: function() {
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
        submit: function() {
            const uri =
                'https://scryfall.com/search?q=' + encodeURI(this.query);
            location.href = uri;
        },
        suggestionClick: function(index) {
            this.currentSuggestion = index;
            this.takeSuggestion();
            document.getElementById('search-input').focus();
        },
    },
};
</script>

<style scoped>
.suggestion-item {
    text-transform: capitalize;
}

.search-container {
    margin-bottom: 0px;
}

/** Bootstrap Modification */

.form-control:focus {
    border-color: #431e3f;
    box-shadow: 0 0 0 0.2rem rgba(152, 72, 144, 0.25);
}

.list-group-item.active {
    background-color: #75326e;
    color: white;
}
</style>
