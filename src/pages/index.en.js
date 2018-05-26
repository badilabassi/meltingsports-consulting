import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { rhythm } from '../utils/typography';
import Img from 'gatsby-image';
import withStyles from 'material-ui/styles/withStyles';
import 'font-awesome/css/font-awesome.min.css';

import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import Card from '../components/Card/Card.jsx';
import CardBody from '../components/Card/CardBody.jsx';
import Footer from '../components/Footer/Footer.jsx';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import Hero from '../components/hero';
import About from '../components/about';
import TeamSection from '../components/team';
import Services from '../components/services';
import ContactUs from '../components/contact';

import { initGoogleMaps } from '../utils/googleMaps';

const propTypes = {
  data: PropTypes.object.isRequired
};

import IndexPage from './index';

export default withStyles(landingPageStyle)(IndexPage);

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
          aboutImage {
            resolutions(width: 1920) {
              width
              height
              src
              srcSet
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
            teamImage {
              resolutions(width: 1920) {
                width
                height
                src
                srcSet
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
              }
            }
            description {
              description
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
