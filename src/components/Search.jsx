import React, { useEffect, useState } from 'react';
import { DocSearchModal } from 'typesense-docsearch-react';
import '@docsearch/css/dist/style.css';
import { createPortal } from 'react-dom';
import { SearchIcon } from '@heroicons/react/solid';
import useSearchHotkey from '../hooks/useSearchHotkey';

const Search = () => {
    const [element, setElement] = useState(null);

    useEffect(() => {
        const el = document.createElement('div');
        document.body.append(el);
        setElement(el);

        return () => document.body.removeChild(el);
    }, []);

    const [opened, setOpened, hotkeyLabel] = useSearchHotkey();

    return (
        <>
            <div className="relative mb-6 h-12">
                <div className="absolute text-white flex space-x-2 h-full w-full items-center pointer-events-none">
                    <SearchIcon className="w-5 h-5 " />
                    <span className="text-md text-gray-400">Quick search</span>
                    <div style={{ flex: 1 }} />
                    <div className="rounded border border-white p-1 border-gray-400 text-xs text-gray-400">
                        {hotkeyLabel}
                    </div>
                </div>
                <input
                    className="border-b absolute border-gray-500 w-full bg-transparent placeholder-transparent h-full"
                    placeholder="Search"
                    onFocus={() => setOpened(true)}
                />
            </div>

            {opened &&
                element &&
                createPortal(
                    <DocSearchModal
                        initialScrollY={0}
                        typesenseCollectionName="docs"
                        typesenseServerConfig={{
                            apiKey: 'V8wMiLz8OLEVUR6mqw5Kvv5cAvSeQQrv',
                            nodes: [
                                {
                                    host: 'plutonium.pw',
                                    path: '/search',
                                    protocol: 'https',
                                },
                            ],
                            cacheSearchResultsForSeconds: 2 * 60,
                        }}
                        onClose={() => setOpened(false)}
                    />,
                    element
                )}
        </>
    );
};

export default Search;
