/**
 * Defines all data for a single search atom.
 */
class Atom {
    constructor(key, shortcut, separators, values) {
        // The search key for this atom (i.e. 'type').
        this.key = key;

        // The shortened name of this atom if any (i.e. 't' for 'type').
        this.shortcut = shortcut;

        // The separators that can be used for this atom (':', '>', etc.).
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

// Registry list for all atoms.
const ALL_ATOMS = [];

// Add a new atom to our global atom registry.
function registerAtom(newAtom) {
    ALL_ATOMS.push(newAtom);
}
