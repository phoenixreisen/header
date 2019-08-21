# Phoenix Header

Header-Leiste, die das Phoenix-Logo sowie - bei Bedarf - einen Versionsnamen darstellt. Es geht mehr um das Logo als um die Leiste, welches sich über die Komponente zentral in alle Services importieren lässt.

Prinzipiell soll diese Komponente den Standard-Header für diverse (standalone) Phoenix-Services bereitstellen.

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/header
```

```js
import Header from '@phoenixreisen/header';

//oder

const Header = require('@phoenixreisen/header');
```

```js
// @param url verlinkt das Logo entsprechend
// @param version wird standardmäßig unter dem Logo angezeigt

<Header version="Kabinenpräsente 1.0.0" url="https://www.phoenixreisen.com" />

//oder

m(Header, { version: "Kabinenpräsente 1.0.0", url: "https://www.phoenixreisen.com" });
```

## Test

```bash
[npm install]

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