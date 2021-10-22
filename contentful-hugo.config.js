/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    singleTypes: [
        {
            id: 'homepage',
            directory: 'content',
            fileName: '_index',
        },
    ],
    repeatableTypes: [
        {
            id: 'youTubeVideo',
            directory: 'content/posts',
            mainContent: "body"
        }
    ],
};