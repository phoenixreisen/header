global.m = require('mithril');
const mq = require("mithril-query");
const snitch = require("ospec");
const fs = require('fs');

/** <Global Scope Stuff> */
global.location = {
    protocol: 'http:',
    host: 'www.phoenixreisen.com',
    pathname: '/'
};
/** </Global Scope Stuff> */

snitch.spec('Initialisierungscheck', () => {
    snitch('Logodatei vorhanden', () => {
        const fileExists = fs.existsSync('src/phx.logo.svg');
        snitch(fileExists).equals(true);
    });
});

snitch.spec('Oberflächencheck', () => {
    const Header = require('../test/header.view.js');

    snitch('"Version" wird nur angezeigt, wenn Parameter gegeben ist', () => {
        const renderWithoutVersion = mq(Header);
        snitch(renderWithoutVersion.should.not.have('.phx-header__version')).equals(true);

        const renderWithVersion = mq(Header, { version: '1.0.0'});
        snitch(renderWithVersion.should.have('.phx-header__version')).equals(true);
    });

    snitch('Logo wird angezeigt', () => {
        const header = mq(Header);
        snitch(header.should.have('.phx-header__logo')).equals(true);
        snitch(header.should.have('a[href="http:\/\/www.phoenixreisen.com"]')).equals(true);

        const header2 = mq(Header, { url: 'https://test.url.de'});
        snitch(header2.should.have('.phx-header__logo')).equals(true);
        snitch(header2.should.have('a[href="https://test.url.de"]')).equals(true);

        const logodiv = mq(header.first('.phx-header__logo'));
        snitch(logodiv.should.have('img')).equals(true);
    });
});