import { pathToRegexp } from 'path-to-regexp';

const isPathActive = (pattern, path, exact = false) => {
    return pathToRegexp(pattern, [], { sensitive: true, end: !!exact }).test(path);
};

export default isPathActive;
