import {useEffect, useState} from "react";
import Head from "next/head";
import '../styles/globals.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import {Provider} from "react-redux";
import {store} from "../redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";
import { useRouter } from "next/router";

function MyApp({Component, pageProps}) {

    const router = useRouter();
    const [initialLoad, setInitialLoad] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.bootstrap = require('bootstrap');

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        if (router.isReady) {
            setInitialLoad(false);
        }

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, []);

    const handleStart = (url) => {
        if (url !== router.asPath) {
            setLoading(true);
        }
    };

    const handleComplete = () => {
        setLoading(false);
        setInitialLoad(false);
    };

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

    const pageTitle = getPageTitle(router.pathname, router.query);

    function getPageTitle(route, query) {
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        if (route === "/") {
            return "Home | Apple";
        }
        else if (route.startsWith("/search/")) {
            return `${capitalizeFirstLetter(query.searchId)} | Apple`;
        }
        else if (route.startsWith("/categories/")) {
            return `Categories | Apple`;
        }
        else if (route.startsWith("/view/")) {
            return `View | Apple`;
        }
        else if (route.startsWith("/admin/")) {
            const adminRoute = route.replace("/admin/", "");
            return `${capitalizeFirstLetter(adminRoute)} | Apple`
        }
        else {
            const pageName = route.replace("/", "");
            return `${capitalizeFirstLetter(pageName)} | Apple`;
        }
    }

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content="Your one stop shop for all your apple products and the best prices"/>
                <meta name="keywords" content="apple, ecommerce, best, deals, kenya"/>
            </Head>
            {initialLoad || loading ? <Loader /> : renderLayout()}
            <ToastContainer/>
        </>
    )
}

export default MyApp


