import logo from './phx.logo.svg';

export const Header = {

    view: ({attrs}) => {
        const {version, url, title, tab} = attrs;
        const {protocol, host, pathname} = location;

        const href = url ? url : `${protocol || ''}//${host}${(pathname && pathname.length > 1) ? pathname:''}`;

        return(
            <article class="phx-header">
                <a href={href} target={tab || '_self'} title={title || ''}>
                    <picture class="phx-header__logo">
                        <img src={logo} />
                    </picture>
                </a>

                {version ?
                    <div class="phx-header__version">
                        {version}
                    </div>
                : ''}
            </article>
        );
    },
};

export default Header;