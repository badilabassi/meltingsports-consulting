var autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Melting Sports | Consulting',
    siteUrl: 'https://www.meltingsportsconsulting.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8 // SASS default: 5
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-XXXXXXX-Y'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3rkpxhjpyn87',
        accessToken:
          '8f981a8b3b32f5975475a5f45322d6e2f84fdbd8dfee0f90e8d2f60930453a24',
        host: 'cdn.contentful.com'
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
