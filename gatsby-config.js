module.exports = {
  siteMetadata: {
    title: `Natura Red Omega`,
    description: `Sitio Natura Red Omega`,
    author: `serge_avila7`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        icon: `src/assets/images/natura-icon.png`, // This path is relative to the root of the site.

      },
    },
  ],
};
