import { Suggestion, SuggestionType } from 'suggestions/suggestion';

/** Defines all data for a single search atom. */
export class Atom {
    constructor(names, separators, values) {
        /**
         * All names used to trigger this atom. Includes full names, short
         * names, aliases, etc.
         */
        this.names = names;

        /** The separators that can be used for this atom (':', '>', etc.). */
        this.separators = separators;

        /** The possible values to fill out this atom. */
        this.values = values;
    }

    /**
     * Gets the suggestions for a particular set of search queries. Also,
     * provides follow up queries to be handled by following stages.
     *
     * @param {SuggestionType} suggestionType The SuggestionType for suggestions
     *   from this stage.
     * @param {Array<string>} stageValues The possible values that make up this
     *   stage. For example, for the name stage, all possible names that could
     *   be used to trigger this atom should be passed here.
     * @param {Array<string>} queries The query texts to determine suggestions
     *   for. This can be full query texts (i.e. the whole query), or partial
     *   query texts representing remainders after values from previous stages
     *   have been extracted.
     * @returns An object containing the following fields:
     *  suggestions: A list of Suggestions.
     *  followUps: Query texts that represent remaining query text after values
     *    from this stage have been extracted.
     *  perfectMatch: Whether or not this stage found a perfect match for one or
     *    more of the query texts.
     */
    handleStage(suggestionType, stageValues, queries) {
        const suggestions = [];
        const followUps = [];
        let perfectMatch = false;
        for (const query of queries) {
            for (const value of stageValues) {
                if (value.length > query.length && value.startsWith(query)) {
                    suggestions.push(
                        new Suggestion(
                            suggestionType,
                            value,
                            value.substr(query.length),
                        ),
                    );
                } else if (value === query) {
                    perfectMatch = true;
                } else if (
                    value.length < query.length &&
                    query.startsWith(value)
                ) {
                    followUps.push(query.substr(value.length));
                }
            }
        }
        return { suggestions, followUps, perfectMatch };
    }

    /**
     * Gets all suggestions for the given query based on this atom.
     *
     * @param {?string} query The query text to provide suggestions for.
     * @returns An list of Suggestion objects for the given query text.
     */
    getSuggestions(query) {
        const suggestions = [];

        const nameStageResult = this.handleStage(
            SuggestionType.NAME,
            this.names,
            [query],
        );
        if (nameStageResult.perfectMatch) {
            suggestions.push(
                ...this.separators.map(
                    sep => new Suggestion(SuggestionType.SEPARATOR, sep, sep),
                ),
            );
        }
        suggestions.push(...nameStageResult.suggestions);
        if (nameStageResult.followUps.length === 0) {
            return suggestions;
        }

        const sepStageResult = this.handleStage(
            SuggestionType.SEPARATOR,
            this.separators,
            nameStageResult.followUps,
        );
        if (sepStageResult.perfectMatch) {
            suggestions.push(
                ...this.values.map(
                    value => new Suggestion(SuggestionType.VALUE, value, value),
                ),
            );
        }
        suggestions.push(...sepStageResult.suggestions);
        if (sepStageResult.followUps.length === 0) {
            return suggestions;
        }

        const valueStageResult = this.handleStage(
            SuggestionType.VALUE,
            this.values,
            sepStageResult.followUps,
        );
        if (valueStageResult.perfectMatch) {
            // Just short circuit if we found a perfect match.
            return [];
        }
        suggestions.push(...valueStageResult.suggestions);

        return suggestions;
    }
}
