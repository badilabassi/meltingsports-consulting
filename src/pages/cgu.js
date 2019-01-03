import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';
// import 'font-awesome/css/font-awesome.min.css';
import Helmet from 'react-helmet';

import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import Footer from '../components/Footer/Footer.jsx';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import _ from 'lodash';

const propTypes = {
  data: PropTypes.object.isRequired
};

const CguPage = ({ classes, data }) => {
  const aboutEdges = data.about.edges;
  const teamEdges = data.team.edges;
  const servicesEdges = data.services.edges;
  const contactEdges = data.contact.edges;
  const cguEdges = data.page.edges;

  const pages = [
    aboutEdges[0].node,
    teamEdges[0].node,
    servicesEdges[0].node,
    contactEdges[0].node
  ];

  const locale = cguEdges[0].node.locale === 'fr' ? 'fr' : 'en';

  cguEdges[0].node.navId = locale === 'fr' ? '/cgu' : `/en/tos`;

  const footerPages = [
    aboutEdges[0].node,
    teamEdges[0].node,
    servicesEdges[0].node,
    contactEdges[0].node,
    cguEdges[0].node
  ];

  const navLinks = pages.map(page => {
    const { title, id, navId } = page;
    const isPage = navId.includes('/');
    return { id, navId, title, isPage };
  });

  const footerNavLinks = footerPages.map(page => {
    const { title, id, navId, locale } = page;
    const isPage = navId.includes('/');
    return { id, navId, title, locale, isPage };
  });

  return (
    <Layout>
      <Helmet>
        <html lang={locale} />
      </Helmet>
      <Header
        color="transparent"
        brand="Melting Sports Consulting"
        rightLinks={<HeaderLinks routes={navLinks} />}
        fixed
        defaultColor="white"
        alternateColor="#0b3e79"
        changeColorOnScroll={{
          height: 200,
          color: 'white'
        }}
      />
      {cguEdges.map(({ node }) => (
        <React.Fragment key={node.id}>
          <div className={classes.staticHeroContainer}>
            <div className={classes.staticHero}>
              <GridContainer style={{ width: '100%', margin: '0 auto' }}>
                <GridItem xs={12} sm={12} md={12}>
                  <h1 className={classes.genericTitle}>{node.title}</h1>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <div className={classes.section}>
                <div
                  className={classes.aboutDescription}
                  dangerouslySetInnerHTML={{ __html: node.body.markdown.html }}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}

      <Footer routes={footerNavLinks} />
    </Layout>
  );
};

CguPage.propTypes = propTypes;

const Cgu = withRoot(withStyles(landingPageStyle)(CguPage));

export default Cgu;

export const pageQuery = graphql`
  query TosQueryFr {
    page: allContentfulTermsOfService(filter: { node_locale: { eq: "fr" } }) {
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
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            # file {
            #   url
            #   fileName
            #   contentType
            #   details {
            #     image {
            #       width
            #       height
            #     }
            #     size
            #   }
            # }
            # resolutions(width: 1920, quality: 90) {
            #   aspectRatio
            #   src
            #   srcSet
            #   srcWebp
            #   srcSetWebp
            # }
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
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            # resolutions(width: 500, quality: 80) {
            #   aspectRatio
            #   src
            #   srcSet
            #   srcWebp
            #   srcSetWebp
            # }
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
              fluid(maxWidth: 400) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              # resolutions(width: 400, quality: 80) {
              #   aspectRatio
              #   src
              #   srcSet
              #   srcWebp
              #   srcSetWebp
              # }
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
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp_noBase64
              }
              # resolutions(width: 300, quality: 50) {
              #   aspectRatio
              #   src
              #   srcSet
              #   srcWebp
              #   srcSetWebp
              # }
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
