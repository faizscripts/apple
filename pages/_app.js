import {useEffect} from "react";
import Head from "next/head";
import '../styles/globals.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {store} from "../redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {

    useEffect(() => {
        window.bootstrap = require('bootstrap');
    }, [])


    function renderLayout() {
        if (Component.pageLayout) {
            return (
                <Provider store={store}>
                    <Component.pageLayout>
                        <Component {...pageProps} />
                    </Component.pageLayout>
                </Provider>
            )
        } else {
            return <Provider store={store}>
                        <Component {...pageProps} />
                   </Provider>
        }
    }

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;1,600;1,700&display=swap" rel="stylesheet"/>
                <title>Apple</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content="Your one stop shop for all your apple products and the best prices"/>
                <meta name="keywords" content="apple, ecommerce, best, deals, kenya"/>
            </Head>
            {renderLayout()}
            <ToastContainer/>
        </>
    )
}

export default MyApp


