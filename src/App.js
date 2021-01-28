import bg1 from './assets/bg1.jpg';
import bg2 from './assets/bg2.jpg';
import './App.css';
import Header from "./conmponents/Header";
import Layout from "./conmponents/Layout";
import Footer from "./conmponents/Footer";
import React from "react";

const App = () => {
    return (
        //<React.Fragment>
        <>
            <Header title="title" />
            <Layout
                id="1"
                title="Перший блок"
                desc="опис першого блоку, опис першого блоку, опис першого блоку, опис першого блоку, опис першого блоку, опис першого блоку, опис першого блоку"
                urlBg={bg1}
            />
            <Layout
                id="2"
                title="Другий блок"
                desc="опис другого блоку, опис другого блоку, опис другого блоку, опис другого блоку, опис другого блоку, опис другого блоку, опис другого блоку, опис другого блоку"
                colorBg="#ff0000"
            />
            <Layout
                id="3"
                title="Третій блок"
                desc="опис третього блоку, опис третього блоку, опис третього блоку, опис третього блоку, опис третього блоку, опис третього блоку, опис третього блоку"
                urlBg={bg2}
            />
            <Footer />
        </>
    )
}

export default App;
