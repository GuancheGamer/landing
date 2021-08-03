import { useRouter } from 'next/router';
import { useEffect } from 'react';

// TODO: could probably figure out something with real redirects instead of clientside navigation. but... eh.
const Redirect = ({ to }) => {
    const { replace } = useRouter();

    useEffect(() => {
        replace(to);
    }, []);

    return <p>Redirecting...</p>;
};
export default Redirect;
