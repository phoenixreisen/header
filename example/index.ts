import Header from '../src/header.m';
import Topbar from '../src/topbar.m';
import m from 'mithril';

const toggleNav = (state) => {
    state.open = !state.open;
    console.log(state.open);
};

const Root = {

    oninit({state}) {
        state.open = false;
    },

    view({state}) {
        return ([
            m('div', {class: 'wrapper wrapper--large'},
                m(Header, {
                    toggleNav: () => toggleNav(state),
                    version: 'Beispiel für Header & Sticky Topbar',
                }),
            ),
            m(Topbar, {
                backUrl: 'https://www.phoenixreisen.com',
                toggleNav: () => toggleNav(state),
                toggleAvatar: () => toggleNav(state),
            }),
        ]);
    },
} as any;

m.mount(document.querySelector('.example-app'), Root);