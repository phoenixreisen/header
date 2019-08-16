# Phoenix Logo-Leiste

Header-Leiste, die das Phoenix-Logo sowie, bei Bedarf, einen Applikationsnamen sowie eine Versionsnummer darstellt. Es geht mehr um das Logo als um die Leiste, welches sich über die Komponente zentral in alle Services importieren lässt.

Prinzipiell soll diese Komponente den Standard-Header für diverse (standalone) Phoenix-Services bereitstellen.

## Anwendung

Mithril wird benötigt.

```bash
npm install --save-dev @phoenixreisen/header
```
```js
import Header from '@phoenixreisen/header';

//oder

const Header = require('@phoenixreisen/header');
```
```js
<Header />

//oder

m(Header);
```

## Test

```bash
npm install
npm run test
```

## Deployment

```bash
[npm install]
[npm run test]

npm version [major|minor|patch]  # increase version x.x.x => major.minor.patch
npm publish                      # upload to npm

hg commit package.json package-lock.json -m "(npm) version increased"
hg push
```