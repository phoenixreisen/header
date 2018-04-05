const snitch = require('mithril/ospec/ospec');
const fs = require('fs');

/** Global Scope Stuff - it may be better to replace this with stubs? */
// use a mock DOM so we can run mithril on the server
global.window = Object.assign(
    require('mithril/test-utils/domMock.js')(), 
    require('mithril/test-utils/pushStateMock')(),
    require("mithril/test-utils/browserMock.js")()
);
global.document = window.document;

global.m = require('mithril');
global.mq = require('mithril-query');

global.location = {
    protocol: 'http:',
    host: 'www.phoenixreisen.com',
    pathname: '/'
};
/** /Global Scope Stuff */

snitch.spec('Basic check...', () => {

    snitch('...if it exists the common logo file', () => {
        const fileExists = fs.existsSync('src/phx.logo.svg');
        snitch(fileExists).equals(true);
    });
});

snitch.spec('Inspect Logobar...', () => {
    const Logobar = require('../test/phx.logobar.view.js');

    snitch('...if version is only visible when parameter is given', () => {
        const renderWithoutVersion = mq(Logobar);
        snitch(renderWithoutVersion.should.not.have('.phx-logobar__version')).equals(true);

        const renderWithVersion = mq(Logobar, { version: '1.0.0'});
        snitch(renderWithVersion.should.have('.phx-logobar__version')).equals(true);
    });

    snitch('...if logo is there', () => {
        const logobar = mq(Logobar);
        snitch(logobar.should.have('.phx-logobar__logo')).equals(true);
        snitch(logobar.should.have('a[href="http:\/\/www.phoenixreisen.com"]')).equals(true);

        const logodiv = mq(logobar.first('.phx-logobar__logo'));
        snitch(logodiv.should.have('img')).equals(true);
    });
});