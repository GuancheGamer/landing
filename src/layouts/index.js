import Sidebar from '../components/Sidebar';
import ToC from '../components/ToC';
import Head from 'next/head';
import React from 'react';
import ExternalLinkIcon from '@heroicons/react/solid/ExternalLinkIcon';

const DocsLayout = ({ frontMatter, children }) => {
    const anchors = React.Children.toArray(children)
        .filter((child) => child.props?.mdxType && ['h2', 'h3'].includes(child.props.mdxType))
        .map((child) => ({
            url: '#' + child.props.id,
            depth: (child.props?.mdxType && parseInt(child.props.mdxType.replace('h', ''), 0)) ?? 0,
            text: child.props.children,
        }));

    return (
        <main className="container mx-auto py-6">
            <Head>
                <title>{`${frontMatter.title} - Plutonium Project`}</title>
            </Head>

            <div className="flex">
                <Sidebar />
                <div className="flex-grow px-4 py-2">
                    <div className="prose lg:prose-xl font-serif">{children}</div>

                    <div className="pt-10 pb-8">
                        <a
                            className=" text-sm font-semibold bg-gray-800 text-gray-300 py-3 px-3 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                            href={`https://github.com/plutoniumpw/docs/edit/develop/${frontMatter.__resourcePath}`}
                            target="_blank"
                        >
                            Edit this page
                            <ExternalLinkIcon className="h-4 w-4 inline ml-2 text-gray-400" />
                        </a>
                    </div>
                </div>
                <ToC anchors={anchors} />
            </div>

            <style jsx global>{`
                .prose h1,
                .prose h2,
                .prose h3,
                .prose h4,
                .prose h5,
                .prose h6 {
                    font-family: 'Poppins', serif;
                }

                // dirty hack to add nav height to anchor location
                h2:target::before,
                h3:target::before,
                h4:target::before,
                h5:target::before,
                h6:target::before {
                    content: '';
                    display: block;
                    height: 110px;
                    margin: -110px 0 0;
                }
            `}</style>
        </main>
    );
};
export default DocsLayout;
