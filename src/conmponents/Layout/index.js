import l from './style.module.css';

// const Layout = ({id, title, desc, urlBg, colorBg, ...props}) => {
const Layout = ({id, title, desc, urlBg, colorBg, children}) => {
    // console.log('#### props: ', props);
    const backgroundStyle=urlBg
        ? { backgroundImage:`url(${urlBg})`}
        : { background: colorBg };
    return (
        <section className="root" id={id} style={backgroundStyle}>
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>{title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;