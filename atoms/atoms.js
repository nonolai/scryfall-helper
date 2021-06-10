class Atom {
    constructor(key, shortcut, separators, values) {
        this.key = key;
        this.shortcut = shortcut;
        this.separators = separators;
        this.values = values;
    }
}

const ALL_ATOMS = [];

function registerAtom(newAtom) {
    ALL_ATOMS.push(newAtom);
}
