global.m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");
const fs = require('fs');

/** <Global Scope Stuff> */
global.location = {
    protocol: 'http:',
    host: 'www.phoenixreisen.com',
    pathname: '/'
};
/** </Global Scope Stuff> */

test.spec('Initialisierungscheck', () => {
    test('Logodatei vorhanden', () => {
        const fileExists = fs.existsSync('src/phx.logo.svg');
        test(fileExists).equals(true);
    });
});

test.spec('Oberflächencheck', () => {
    const Header = require('../dist/header.m.js').default;

    test('"Version" wird nur angezeigt, wenn Parameter gegeben ist', () => {
        const renderWithoutVersion = mq(Header);
        test(renderWithoutVersion.should.not.have('.phx-header__version')).equals(true);

        const renderWithVersion = mq(Header, { version: '1.0.0'});
        test(renderWithVersion.should.have('.phx-header__version')).equals(true);
    });

    test('Logo wird angezeigt', () => {
        const header = mq(Header);
        test(header.should.have('.phx-header__logo')).equals(true);
        test(header.should.have('a[href="http:\/\/www.phoenixreisen.com"]')).equals(true);

        const header2 = mq(Header, { url: 'https://test.url.de'});
        test(header2.should.have('.phx-header__logo')).equals(true);
        test(header2.should.have('a[href="https://test.url.de"]')).equals(true);

        const logodiv = mq(header.first('.phx-header__logo'));
        test(logodiv.should.have('img')).equals(true);
    });
});