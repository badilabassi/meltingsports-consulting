import React from 'react';
// import * as PropTypes from 'prop-types';
// import classNames from 'classnames';
// import Img from 'gatsby-image';
// import withStyles from 'material-ui/styles/withStyles';
// import 'font-awesome/css/font-awesome.min.css';
// import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import Index from '../index';

export default Index;

export const pageQuery = graphql`
  query PageQueryEn {
    hero: allContentfulHero(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          description {
            markdown: childMarkdownRemark {
              html
            }
          }
          image: slideshow {
            resolutions(width: 1920) {
              base64
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              aspectRatio
            }
          }
        }
      }
    }
    about: allContentfulAbout(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          description {
            markdown: childMarkdownRemark {
              html
            }
          }
          image: aboutImage {
            resolutions(width: 1920) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
          backgroundImageToggle
        }
      }
    }
    team: allContentfulTeamSection(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          team {
            id
            image: teamImage {
              resolutions(width: 1920) {
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            name
            position
            summary {
              summary
              markdown: childMarkdownRemark {
                html
              }
            }
            experience
            linkedInLink
          }
        }
      }
    }
    services: allContentfulServices(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          service {
            id
            title
            image: serviceImage {
              resolutions(width: 1920) {
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            description {
              markdown: childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`;
