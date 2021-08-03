import { useCallback, useEffect, useState } from 'react';

const useHasScrolled = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const scrollHandler = useCallback(() => setHasScrolled(window.scrollY > 0), []);
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        scrollHandler();
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [scrollHandler]);

    return hasScrolled;
};
export default useHasScrolled;
