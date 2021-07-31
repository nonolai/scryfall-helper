# Scryfall Helper

This project adds assistance for searching cards on
[Scryfall](https://scryfall.com/).

Scryfall has an incredibly powerful search syntax that allows users to look for
pretty much any subset of Magic: The Gathering cards you could imagine. However,
their search boxes provide very little assistance in discovering what you can
search for.

"Scryfall Helper" aims to add suggestions during searching to quickly inform
what search atoms are available and, for search atoms with limited values, what
valid values are.

# Contributing

## Get the Code

```
% git pull <this repo>
% npm install
```

## Build the Code

```
% npx webpack
```

## Test the Code

```
% npm run test
```

## Push the New Version

```
% git subtree push --prefix dist origin gh-pages
```