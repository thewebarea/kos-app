import l from './style.module.css';
console.log('#####: l',l);

const Layout = ({id, title, desc, urlBg, colorBg}) => {
    const backgroundStyle=urlBg
        ? { backgroundImage:`url(${urlBg})`}
        : { background: colorBg };
    return (
        <section className="root" id={id} style={backgroundStyle}>
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>
                            {title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        <p>{desc}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;