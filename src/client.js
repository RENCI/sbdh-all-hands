const contentful = require('contentful')

export const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    environment: 'dev',
    accessToken: process.env.CONTENTFUL_CONTENT
})