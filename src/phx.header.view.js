const logo = require('./phx.logo.svg');

const Header = {

    view: (vnode) => {
        const { version, url } = vnode.attrs;
        const { protocol, host, pathname } = location;

        const href = url ? url : `${protocol || ''}//${host}${(pathname && pathname.length > 1) ? pathname:''}`;

        return(
            <article class="phx-header phx-header">
                <a href={href}>
                    <picture class="phx-header__logo"> 
                        <img src={logo} />
                    </picture>
                </a>

                { version ?
                    <div class="phx-header__version">
                        { version }
                    </div>
                : ''}
            </article>
        );
    },
};

if(typeof module !== 'undefined') {
    module.exports = Header;
}