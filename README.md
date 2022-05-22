# Scryfall Helper

This project adds assistance for searching cards on
[Scryfall](https://scryfall.com/).

Scryfall has an incredibly powerful search syntax that allows users to look for
pretty much any subset of Magic: The Gathering cards you could imagine. However,
their search boxes provide very little assistance in discovering what you can
search for.

["Scryfall Helper"](https://nonolai.github.io/scryfall-helper/) aims to add
suggestions during searching to quickly inform what search atoms are available
and, for search atoms with limited values, what valid values are.

# Devlopment Workflow

## Get the Code

```
% git pull <this repo>
% npm install
```

## Regenerate Automated Search Atoms

```
% python3 atom_generator.py <all|atom to regenerate>
```

## Build the Production Code

```
% npm run build
```

## Run the Local Development Server

```
% npm run devserver
```

## Test the Code

```
% npm run test
```

## Push the New Version

```
% git subtree push --prefix dist origin gh-pages
```