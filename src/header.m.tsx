import m from 'mithril';

interface Attrs {
    version?: string,
    title?: string,
    tab?: string,
    url?: string,
}

const logo = require('./phx.logo.svg');

export const Header: m.Component<Attrs> = {

    view: ({attrs}) => {
        const {version, url, title, tab} = attrs as Attrs;
        const {protocol, host, pathname} = location as Location;

        const href = !url
            ? `${protocol || ''}//${host}${(pathname?.length > 1) ? pathname : ''}`
            : url;

        return (
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