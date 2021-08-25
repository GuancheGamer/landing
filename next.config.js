const svgr = require('next-plugin-svgr');
const createMdx = require('next-mdx-enhanced');
const withPlugins = require('next-compose-plugins');
const slug = require('rehype-slug');
const autolinkHeadings = require('rehype-autolink-headings');
const prism = require('remark-prism');
const remarked = require('remarked');
const cheerio = require('cheerio');
const images = require('next-images');

const mdx = createMdx({
    fileExtensions: ['md', 'mdx'],
    rehypePlugins: [
        slug,
        [
            autolinkHeadings,
            {
                behavior: 'append',
                properties: {
                    className: 'text-white ml-2 no-underline opacity-70 md-autolink',
                },
                content: {
                    type: 'element',
                    tagName: 'span',
                    properties: { className: ['text-gray-700'] },
                    children: [{ type: 'text', value: '#' }],
                },
            },
        ],
    ],
    remarkPlugins: [prism],
    extendFrontMatter: {
        // autodetects title and adds it to frontMatter
        process: (mdxContent, frontMatter) => {
            const content = remarked(mdxContent);
            const $ = cheerio.load(content);
            const title = $('h1:first-of-type').text();
            frontMatter.title = title;
            return frontMatter;
        },
    },
    defaultLayout: true,
    layoutPath: 'src/layouts',
});

module.exports = withPlugins([mdx, svgr, [images, { fileExtensions: ['jpg', 'jpeg', 'png', 'gif'] }]], {
    pageExtensions: ['js', 'jsx', 'mdx', 'md'],
    trailingSlash: true,

    // mdx-enhanced does not play nice (yet) with webpack5 it seems...
    webpack5: false,
});
