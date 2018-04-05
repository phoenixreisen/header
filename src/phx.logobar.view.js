const logo = require('./phx.logo.svg');

const Logobar = {

    view: (vnode) => {
        return(
            <article class="phx-logobar">
                <a href={`${location.protocol}//${location.host}${location.pathname.length > 1 ? `${location.pathname}` : ''}`}>
                    <picture class="phx-logobar__logo"> 
                        <img src={logo} />
                    </picture>
                </a>

                { vnode.attrs.version ?
                <div class="phx-logobar__version">
                    { vnode.attrs.version }
                </div>
                : ''}
            </article>
        );
    },
};

module.exports = Logobar;