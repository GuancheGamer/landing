import { Disclosure } from '@headlessui/react';
import ChevronUpIcon from '@heroicons/react/solid/ChevronUpIcon';

const Details = ({ title, children }) => (
    <div className="w-full my-4">
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={`flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 ${
                            open ? 'rounded-t-lg' : 'rounded'
                        }`}
                    >
                        <span>{title}</span>
                        <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-blue-500`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 py-1 text-sm text-gray-500 bg-blue-100 children rounded-b-lg">
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <style jsx>{`
            .children :global(p) {
                margin: 0.5rem 0;
            }
            .children :global(*) {
                color: inherit;
            }
        `}</style>
    </div>
);

export default Details;
