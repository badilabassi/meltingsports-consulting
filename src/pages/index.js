import React from 'react';
import Helmet from 'react-helmet';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from 'gatsby-image';
import withStyles from 'material-ui/styles/withStyles';
import withRoot from '../withRoot';
import 'font-awesome/css/font-awesome.min.css';

import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import Card from '../components/Card/Card.jsx';
import CardBody from '../components/Card/CardBody.jsx';
import Footer from '../components/Footer/Footer.jsx';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Hero from '../components/hero';
import About from '../components/about';
import TeamSection from '../components/team';
import Services from '../components/services';
import ContactUs from '../components/contact';

import { initGoogleMaps } from '../utils/googleMaps';

const _ = require('lodash');

const propTypes = {
  data: PropTypes.object.isRequired
};

class IndexPage extends React.Component {
  componentDidMount() {
    window.initGoogleMaps = initGoogleMaps;
    {
      initGoogleMaps({
        ...this.props.data.contact.edges[0].node.mapCoordinate
      });
    }
  }

  render() {
    const { classes, data } = this.props;
    console.log(data);
    const heroEdges = data.hero.edges;
    const aboutEdges = data.about.edges;
    const teamEdges = data.team.edges;
    const servicesEdges = data.services.edges;
    const contactEdges = data.contact.edges;
    const cguEdges = data.cgu.edges;

    const locale = cguEdges[0].node.locale === 'fr' ? 'fr' : 'en';

    cguEdges[0].node.navId = locale === 'fr' ? '/cgu' : `/en/tos`;

    const pages = [
      aboutEdges[0].node,
      teamEdges[0].node,
      servicesEdges[0].node,
      contactEdges[0].node
    ];

    const footerPages = [
      aboutEdges[0].node,
      teamEdges[0].node,
      servicesEdges[0].node,
      contactEdges[0].node,
      cguEdges[0].node
    ];

    const navLinks = pages.map(page => {
      const { title, id, navId } = page;
      return { id, navId, title };
    });

    const footerNavLinks = footerPages.map(page => {
      const { title, id, navId } = page;
      return { id, navId, title };
    });

    return (
      <React.Fragment>
        <Helmet>
          <html lang={locale} />
        </Helmet>
        <Header
          color="transparent"
          brand="Melting Sports Consulting"
          rightLinks={<HeaderLinks isRoot routes={navLinks} />}
          fixed
          defaultColor="white"
          alternateColor="#0b3e79"
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
        />
        {heroEdges.map(({ node }) => <Hero key={node.id} {...node} />)}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {aboutEdges.map(({ node }) => <About key={node.id} {...node} />)}
            {teamEdges.map(({ node }) => (
              <TeamSection key={node.id} {...node} />
            ))}
            {servicesEdges.map(({ node }) => (
              <Services key={node.id} {...node} />
            ))}
          </div>
        </div>
        {contactEdges.map(({ node }) => <ContactUs key={node.id} {...node} />)}

        <Footer isRoot routes={footerNavLinks} />
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = propTypes;

// const Index =

export default withRoot(withStyles(landingPageStyle)(IndexPage));

const contentfulAssetSizesPreferWebpNoBase64 = graphql`
  fragment GatsbyContentfulSizes_withWebp_noBase64 on ContentfulSizes {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;

export const pageQuery = graphql`
  query PageQueryFr {
    cgu: allContentfulTermsOfService(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          title
          body {
            markdown: childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    hero: allContentfulHero(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          title
          description {
            markdown: childMarkdownRemark {
              html
            }
          }
          image: slideshow {
            file {
              url
              fileName
              contentType
              details {
                image {
                  width
                  height
                }
                size
              }
            }
            resolutions(width: 1920, quality: 90) {
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
            }
          }
        }
      }
    }
    about: allContentfulAbout(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          navId
          title
          description {
            markdown: childMarkdownRemark {
              html
            }
          }
          image: aboutImage {
            resolutions(width: 500, quality: 80) {
              aspectRatio
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
    team: allContentfulTeamSection(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          navId
          title
          team {
            id
            image: teamImage {
              resolutions(width: 400, quality: 80) {
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
              }
            }
            name
            position
            summary {
              markdown: childMarkdownRemark {
                html
              }
            }
            linkedInLink
          }
        }
      }
    }
    services: allContentfulServices(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          navId
          title
          service {
            id
            title
            image: serviceImage {
              resolutions(width: 300, quality: 50) {
                aspectRatio
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
    contact: allContentfulContactForm(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          navId
          title
          officeTitleField
          officeAddressField {
            markdown: childMarkdownRemark {
              html
            }
          }
          mapCoordinate {
            longitude: lon
            latitude: lat
          }
          nameField
          emailField
          messageField
          submitButton
          robot
          disclaimer {
            markdown: childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
