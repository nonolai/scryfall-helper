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
                :key="index"
                @click="suggestionClick(index)"
            >
                <span class="badge">{{ suggestion.type }}</span>
                {{ suggestion.value }}
            </button>
        </ul>
    </div>
</template>

<script>
import { SuggestionType } from 'suggestions/suggestion';
import { SuggestionService } from 'suggestions/suggestions';
import {
    ARTIST_ATOM,
    ARTIST_COUNT_ATOM,
    ILLUSTRATION_COUNT_ATOM,
    WATERMARK_ATOM,
} from 'atoms/art';
import { BORDER_ATOM, FRAME_ATOM } from 'atoms/border';
import { COLOR_ATOM, COLOR_IDENTITY_ATOM } from 'atoms/color';
import { DATE_ATOM } from 'atoms/date';
import {
    DIRECTION_ATOM,
    DISPLAY_ATOM,
    ORDER_ATOM,
    PREFER_ATOM,
    UNIQUE_ATOM,
    UNIQUE_SHORTCUTS_ATOM,
} from 'atoms/display';
import { FORMAT_ATOM } from 'atoms/format';
import { GAMES_ATOM } from 'atoms/games';
import { INCLUDE_ATOM } from 'atoms/include';
import { KEYWORD_ATOM } from 'atoms/keyword';
import { LANGUAGE_ATOM } from 'atoms/language';
import { HAS_ATOM, IN_ATOM, IS_ATOM } from 'atoms/misc';
import { NEW_ATOM } from 'atoms/new';
import { CHEAPEST_ATOM, PRICE_ATOM } from 'atoms/price';
import {
    PRINT_COUNT_ATOM,
    SET_COUNT_ATOM,
    PAPER_PRINT_COUNT_ATOM,
    PAPER_SET_COUNT_ATOM,
} from 'atoms/printings';
import { RARITY_ATOM } from 'atoms/rarity';
import { SET_ATOM, SET_TYPE_ATOM } from 'atoms/sets';
import { ART_TAG_ATOM, FUNCTION_TAG_ATOM } from 'atoms/tags';
import { FLAVOR_TEXT_ATOM, ORACLE_TEXT_ATOM } from 'atoms/text';
import { TYPE_ATOM } from 'atoms/type';


const suggestionService = new SuggestionService([
    ART_TAG_ATOM,
    ARTIST_ATOM,
    ARTIST_COUNT_ATOM,
    BORDER_ATOM,
    CHEAPEST_ATOM,
    COLOR_ATOM,
    COLOR_IDENTITY_ATOM,
    DATE_ATOM,
    DIRECTION_ATOM,
    DISPLAY_ATOM,
    FLAVOR_TEXT_ATOM,
    FORMAT_ATOM,
    FRAME_ATOM,
    FUNCTION_TAG_ATOM,
    GAMES_ATOM,
    HAS_ATOM,
    ILLUSTRATION_COUNT_ATOM,
    INCLUDE_ATOM,
    IN_ATOM,
    IS_ATOM,
    KEYWORD_ATOM,
    LANGUAGE_ATOM,
    NEW_ATOM,
    ORACLE_TEXT_ATOM,
    ORDER_ATOM,
    PAPER_PRINT_COUNT_ATOM,
    PAPER_SET_COUNT_ATOM,
    PREFER_ATOM,
    PRICE_ATOM,
    PRINT_COUNT_ATOM,
    RARITY_ATOM,
    SET_ATOM,
    SET_COUNT_ATOM,
    SET_TYPE_ATOM,
    TYPE_ATOM,
    UNIQUE_ATOM,
    UNIQUE_SHORTCUTS_ATOM,
    WATERMARK_ATOM,
]);

export default {
    data: function() {
        return {
            // The current value of the search bar.
            query: '',
            // The current selected index in the list of suggestions.
            currentSuggestion: -1,
        };
    },
    computed: {
        suggestions: function() {
            this.currentSuggestion = 0;
            return suggestionService.getSuggestions(this.query);
        },
    },
    methods: {
        takeSuggestion: function() {
            if (
                this.suggestions &&
                this.suggestions.length > this.currentSuggestion
            ) {
                const takenSuggestion = this.suggestions[
                    this.currentSuggestion
                ];
                this.query += takenSuggestion.toAppend;

                if (takenSuggestion.type === SuggestionType.VALUE) {
                    this.query += ' ';
                }
            }
        },
        submit: function() {
            if (this.suggestions && this.suggestions.length > 0) {
                this.takeSuggestion();
            } else {
                const uri =
                    'https://scryfall.com/search?q=' + encodeURI(this.query);
                location.href = uri;
            }
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

button span.badge {
    color: #431e3f;
}

button.active span.badge {
    color: #ffffff;
    background-color: #431e3f;
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
