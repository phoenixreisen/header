# Phoenix Logo-Leiste

Eine einfache Leiste, die das Phoenix-Logo sowie, bei Bedarf, eine Versionsnummer darstellt. Es geht mehr um das Logo als um die Leiste, welches sich über die Komponente zentral in alle Services importieren lässt.

Prinzipiell soll diese Komponente den Standard-Header für alle Phoenix-Services bereitstellen.

Das Projekt ist hier auf Trello zu finden: [Phoenix-Design-System](https://trello.com/b/eCtdNBzu)

## Installation

```bash
npm install --save-dev @phoenixreisen/logobar
```

## Test

```bash
npm install

npm run test
```

## Deployment

```bash
npm run test

npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm

hg commit package.json package-lock.json -m "(npm) version increased"
hg push
```