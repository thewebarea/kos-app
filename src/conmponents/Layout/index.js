import s from './style.module.css';
console.log('#####: s',s);

const Layout = ({id, title, desc}) => {
    return (
        <section className="root" id={id}>
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