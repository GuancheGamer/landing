import { pathToRegexp } from 'path-to-regexp';

const stripHash = (path) => {
    // we want to ignore hashes, quick and dirty hack.
    if (path?.includes('#')) {
        return path.split('#')[0];
    }
    return path;
};

const isPathActive = (pattern, path, exact = false) => {
    pattern = stripHash(pattern);
    return pathToRegexp(pattern, [], { sensitive: true, end: !!exact }).test(path);
};

export default isPathActive;
