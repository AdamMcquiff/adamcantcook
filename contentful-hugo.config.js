// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    locales: [], // uses default locale if left empty
    singleTypes: [],
    repeatableTypes: [
        {
            id: 'youTubeVideo',
            directory: 'content/posts',
            mainContent: "body"
        }
    ],
};