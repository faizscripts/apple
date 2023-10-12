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

    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        window.bootstrap = require('bootstrap');
        setLoading(false);
    }, []);

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
        else if (route.startsWith("/search/") && query.searchId) {
            return `${capitalizeFirstLetter(query.searchId)} | Apple`;
        }
        else if (route.startsWith("/categories/") && query.categoryId) {
            return `Categories | Apple`;
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
            {loading ? <Loader /> : renderLayout()}
            <ToastContainer/>
        </>
    )
}

export default MyApp


