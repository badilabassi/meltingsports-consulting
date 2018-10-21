require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require(`path`);

let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    title: 'Melting Sports | Consulting',
    siteUrl: 'https://www.meltingsportsconsulting.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-jss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.meltingsportsconsulting.com'
      }
    },
    {
      resolve: `@wapps/gatsby-plugin-material-ui`,
      options: {
        theme: {
          typography: {
            useNextVariants: true
          }
        },
        productionPrefix: 'c'
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-purgecss`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650
            }
          }
        ]
      }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Melting Sports Consulting',
        short_name: 'Melting Sports Consulting',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#0b3e79',
        display: 'minimal-ui',
        icon: 'src/images/icon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#0b3e79'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify'
  ]
};
