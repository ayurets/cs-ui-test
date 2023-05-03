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
  plugins: ["gatsby-plugin-styled-components", {
    resolve: `gatsby-source-contentstack`,
    // options: {
    //   // Required: API Key is a unique key assigned to each stack.
    //   api_key: `blte646c896ce636cf1`,

    //   // Required: Delivery Token is a read-only credential. 
    //   delivery_token: `cs8153aa227a4a2ea442f51789`,
      
    //   // Required: Environment where you published your data.
    //   environment: `main_test_environment`,
    //   expediteBuild: false,
    // },
    options: {
      api_key: process.env.CONTENTSTACK_API_KEY,
      delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.CONTENTSTACK_ENVIRONMENT,
    },
  },]
};