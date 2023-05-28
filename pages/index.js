import React, { useEffect } from "react";
import Head from "next/head";
import About from "../components/homepage/About/About";
import Footer from "../components/homepage/Footer/Footer";
import Guest from "../components/homepage/Guest/Guest";
import Header from "../components/homepage/Header/Header";

import { useDispatch, useSelector } from "react-redux";
import { getAllMusic } from "../actions/musicActions";
import { links } from "../utils/resources/links";

const HomePage = () => {
    const linkEls = links.map((link, id) => (
        <link
            key={id}
            rel="apple-touch-icon"
            sizes={link.sizes}
            href={link.href}
            type="image/png"
        />
    ));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMusic());
    }, []);
    return (
        <div>
            <Head>
                {linkEls}
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <title>VOVOCA | Home</title>
            </Head>
            <Header />
            <About />
            <Guest />
            <Footer />
        </div>
    );
};

export default HomePage;
