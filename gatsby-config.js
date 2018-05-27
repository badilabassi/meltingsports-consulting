var autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Melting Sports | Consulting'
  },
  plugins: [
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
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
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
              maxWidth: 590
            }
          }
        ]
      }
    }
  ]
};
