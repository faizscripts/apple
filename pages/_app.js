import {useEffect} from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import '../styles/globals.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/Footer";
import {wrapper} from "../store/store";

function MyApp({Component, pageProps}) {

    useEffect(() => {
        window.bootstrap = require('bootstrap');
    }, [])

    function renderLayout() {
        if (Component.pageLayout) {
            return (
                <Component.pageLayout>
                    <Component {...pageProps} />
                </Component.pageLayout>
            )
        } else {
            return <Component {...pageProps} />
        }
    }

    return (
        <>
            <Head>
                <title>Apple</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content="Your one stop shop for all your apple products and the best prices"/>
                <meta name="keywords" content="apple, ecommerce, best, deals, kenya"/>
            </Head>
            {renderLayout()}
        </>
    )
}

export default wrapper.withRedux(MyApp)
