/** Utility for getting suggestions from a set of installed Atoms. */
export class SuggestionService {
    constructor(atoms) {
        this.atoms = atoms;
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

        const parts = query.toLowerCase().split(' ');
        let lastToken = parts[parts.length - 1];
        if (!lastToken) {
            return [];
        }

        lastToken = lastToken.replace(/^-+/, '');
        if (!lastToken) {
            return [];
        }

        const allSuggestions = this.atoms.flatMap(atom =>
            atom.getSuggestions(lastToken),
        );
        allSuggestions.sort((a, b) => {
            if (a.value < b.value) {
                return -1;
            } else if (a.value > b.value) {
                return 1;
            }
            return 0;
        });
        return allSuggestions.slice(0, maxResults);
    }
}
