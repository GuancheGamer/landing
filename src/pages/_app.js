import '../global.css';
import 'tailwindcss/tailwind.css';
import 'prism-theme-one-dark/prism-onedark.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Details from '../components/Details';
import Alert from '../components/Alert';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Redirect from '../components/Redirect';

const mdxComponents = {
    Alert,
    Details,
    Redirect,
    a: ({ href, children, ...rest }) => (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    ),
};

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet" />
        </Head>

        <div className="text-white bg-gray-900 min-h-screen font-serif">
            <Nav />

            <MDXProvider components={mdxComponents}>
                <Component {...pageProps} />
            </MDXProvider>

            <Footer />
        </div>
    </>
);

export default MyApp;
