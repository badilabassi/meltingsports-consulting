module.exports = {
  siteMetadata: {
    title: `Melting Sports | Consulting`,
  },
  plugins: [
    `gatsby-plugin-sass`, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-XXXXXXX-Y`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3rkpxhjpyn87`,
        accessToken: `8f981a8b3b32f5975475a5f45322d6e2f84fdbd8dfee0f90e8d2f60930453a24`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
