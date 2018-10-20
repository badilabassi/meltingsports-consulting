require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Melting Sports | Consulting',
    siteUrl: 'https://www.meltingsportsconsulting.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-jss`,
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
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_API_KEY,
        host: process.env.CONTENTFUL_HOST
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
      resolve: 'gatsby-plugin-sitemap'
    }
  ]
};
