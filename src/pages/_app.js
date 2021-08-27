import '../global.css';
import 'tailwindcss/tailwind.css';
import 'prism-theme-one-dark/prism-onedark.css';
import Head from 'next/head';
import Nav from '../components/Nav';
import Details from '../components/Details';
import Alert from '../components/Alert';
import { MDXProvider } from '@mdx-js/react';
import Footer from '../components/Footer';
import Redirect from '../components/Redirect';
import NavTile from '../components/NavTile';
import NavTiles from '../components/NavTiles';
import InternalLink from '../components/InternalLink';
import ReactPlayer from 'react-player';
import { ClipboardIcon } from '@heroicons/react/solid';
import copy from 'copy-to-clipboard';
import { useRef } from 'react';

const mdxComponents = {
    Alert,
    Details,
    Redirect,
    NavTile,
    NavTiles,
    Player: ReactPlayer,
    a: (props) => <InternalLink {...props} />,
    pre: ({ children, ...rest }) => {
        const pre = useRef(null);
        return (
            <div className="relative group">
                <pre {...rest} ref={pre}>
                    {children}
                </pre>
                <button
                    className="bg-gray-700 opacity-0 transition-opacity duration-100 group-hover:opacity-100 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 absolute right-4 top-4"
                    onClick={() => copy(pre.current.innerText)}
                >
                    <ClipboardIcon className="text-white w-4 h-4" />
                </button>
            </div>
        );
    },
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
