const logo = require('./phx.logo.svg');

const Logobar = {

    view: (vnode) => {
        const { version, url } = vnode.attrs;
        const { protocol, host, pathname } = location;

        const href = url ? url : `${protocol || ''}//${host}${(pathname && pathname.length > 1) ? `${pathname}` : ''}`;

        return(
            <article class="phx-logobar">
                <a href={href}>
                    <picture class="phx-logobar__logo"> 
                        <img src={logo} />
                    </picture>
                </a>

                { version ?
                    <div class="phx-logobar__version">
                        { version }
                    </div>
                : ''}
            </article>
        );
    },
};

module.exports = Logobar;