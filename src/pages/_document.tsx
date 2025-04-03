//only rendered on the server
//injecting SSR styles
//You typically don’t receive external props from components/pages here
import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
//import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v15-pagesRouter';



export default function MyDocument() {
    return (
        <Html lang='en'>
            <Head>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}