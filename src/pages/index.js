import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
// import { rhythm } from '../utils/typography';
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

    const heroEdges = data.hero.edges;
    const aboutEdges = data.about.edges;
    const teamEdges = data.team.edges;
    const servicesEdges = data.services.edges;
    const contactEdges = data.contact.edges;

    return (
      <React.Fragment>
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

        <Footer />
      </React.Fragment>
    );
  }
}

IndexPage.propTypes = propTypes;

const Index = withStyles(landingPageStyle)(IndexPage);

export default Index;

export const pageQuery = graphql`
  query PageQueryFr {
    hero: allContentfulHero(filter: { node_locale: { eq: "fr" } }) {
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
    about: allContentfulAbout(filter: { node_locale: { eq: "fr" } }) {
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
            resolutions(width: 500) {
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
    team: allContentfulTeamSection(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          title
          team {
            id
            image: teamImage {
              resolutions(width: 500) {
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
    services: allContentfulServices(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          title
          service {
            id
            title
            image: serviceImage {
              resolutions(width: 500) {
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
    contact: allContentfulContactForm(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
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
