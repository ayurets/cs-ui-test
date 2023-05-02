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
    options: {
      // Required: API Key is a unique key assigned to each stack.
      api_key: `blt9fe7ff0979b8c046`,

      // Required: Delivery Token is a read-only credential. 
      delivery_token: `cs56bf5d5b80f2cea1afb65edd`,
      
      // Required: Environment where you published your data.
      environment: `development`,
    },
  },]
};