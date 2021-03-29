require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'app-1',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: 'ced9tzesda3d',
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
  ],
};
