import { Trie } from 'utils/trie';

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

        if (values.length) {
            // If we have values, dump them into a prefix tree.
            this.values = new Trie();
            for (const value of values) {
                this.values.insert(value);
            }
        } else {
            // If we don't, leave null so that !atom.values works as expected.
            this.values = null;
        }
    }
}
