require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Playground`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-styled-components",  "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp", {
    resolve: `gatsby-source-contentstack`,
    options: {
      api_key: process.env.CONTENTSTACK_API_KEY,
      delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.CONTENTSTACK_ENVIRONMENT,
    },
  },]
};