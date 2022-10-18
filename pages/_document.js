import {Html, Head, Main, NextScript} from 'next/document';



export default function Document() {

    return (
        <Html>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/images/favicon/site.webmanifest"/>
                <link
                    rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>

            </Head>
            <body>
            <Main/>
            <NextScript/>
            {/*<Script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" strategy="beforeInteractive"/>*/}
            </body>
        </Html>
    )
}