const m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");
const fs = require('fs');

/** Global Scope Stuff */
Object.assign(global, m, { location: {
    protocol: 'http:',
    host: 'www.phoenixreisen.com',
    pathname: '/'
}});

test.spec('Initialisierungscheck', () => {
    test('Logodatei vorhanden', () => {
        const fileExists = fs.existsSync('src/phx.logo.svg');
        test(fileExists).equals(true);
    });
});

test.spec('Header', () => {
    const Header = require('../test/header.m.js').default;

    test('zeigt "Version" nur an, wenn Parameter gegeben ist', () => {
        const renderWithoutVersion = mq(Header);
        test(renderWithoutVersion.should.not.have('.header__version')).equals(true);

        const renderWithVersion = mq(Header, { version: '1.0.0'});
        test(renderWithVersion.should.have('.header__version')).equals(true);
    });

    test('rendert Logo korrekt', () => {
        const header = mq(Header);
        test(header.should.have('.header__logo')).equals(true);
        test(header.should.have('a[href="http:\/\/www.phoenixreisen.com"]')).equals(true);
        test(header.should.have('img[src="./phx.logo.svg"]')).equals(true);

        const header2 = mq(Header, { url: 'https://test.url.de'});
        test(header2.should.have('.header__logo')).equals(true);
        test(header2.should.have('a[href="https://test.url.de"]')).equals(true);

        const logodiv = mq(header.first('.header__logo'));
        test(logodiv.should.have('img')).equals(true);
    });
});