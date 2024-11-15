import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <body className="antialiased font-sans bg-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
