const svgr = require('next-plugin-svgr');
const createMdx = require('next-mdx-enhanced');
const withPlugins = require('next-compose-plugins');
const slug = require('rehype-slug');
const prism = require('remark-prism');
const remarked = require('remarked');
const cheerio = require('cheerio');

const mdx = createMdx({
    fileExtensions: ['md', 'mdx'],
    rehypePlugins: [slug],
    remarkPlugins: [prism],
    extendFrontMatter: {
        // autodetects title and adds it to frontMatter
        process: (mdxContent, frontMatter) => {
            const content = remarked(mdxContent);
            const $ = cheerio.load(content);
            const title = $('h1:first-child').text();
            frontMatter.title = title;
            return frontMatter;
        },
    },
    defaultLayout: true,
    layoutPath: 'src/layouts',
});

module.exports = withPlugins([mdx, svgr], {
    pageExtensions: ['js', 'jsx', 'mdx', 'md'],
    trailingSlash: true,

    // mdx-enhanced does not play nice (yet) with webpack5 it seems...
    webpack5: false,
});
