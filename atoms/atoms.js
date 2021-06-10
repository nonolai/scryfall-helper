function Atom(key, separators, values) {
    this.key = key;
    this.separators = separators;
    this.values = values;
}

const ALL_ATOMS = [];

function registerAtom(newAtom) {
    ALL_ATOMS.push(newAtom);
}
