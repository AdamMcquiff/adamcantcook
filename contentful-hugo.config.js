// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    contentful: {
        // defaults to CONTENTFUL_SPACE env variable
        space: 'mpnge9ir991p',
        // defaults to CONTENTFUL_TOKEN env variable
        token: 'Z3ihhUJMCpxSDMe2T8REyNDL0srtsECmu2gAvBBW_hc',
        // defaults to CONTENTFUL_PREVIEW_TOKEN env variable
        previewToken: 'm8gPMF77aZBIaniG1dZkPu6NgCf0iIhzD-vtYmzhUAs',
        // defaults to "master"
        environment: 'master',
    },
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