import React from 'react';
import Helmet from 'react-helmet';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import withRoot from '../withRoot';
import 'font-awesome/css/font-awesome.min.css';

import Footer from '../components/Footer/Footer.jsx';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import Header from '../components/Header/Header.jsx';
import HeaderLinks from '../components/Header/HeaderLinks.jsx';
import Hero from '../components/hero';
import About from '../components/about';
import TeamSection from '../components/team';
import Services from '../components/services';
import ContactUs from '../components/contact';
import { graphql } from 'gatsby';
import { initGoogleMaps } from '../utils/googleMaps';
import Layout from '../components/layout';

import _ from 'lodash';

const propTypes = {
  data: PropTypes.object.isRequired
};

class IndexPage extends React.Component {
  initGMaps = () => {
    const lat = 48.827487;
    const long = 2.260838;
  
    const centerLong = long - 0.0015;
  
    const myLatlng = new google.maps.LatLng(lat, long);
    const centerPosition = new google.maps.LatLng(lat, centerLong);
  
    // const google = !!window && window.google;
  
    const mapOptions = {
      zoom: 17,
      center: centerPosition,
      styles: [
        {
          featureType: 'water',
          stylers: [
            {
              saturation: 43
            },
            {
              lightness: -11
            },
            {
              hue: '#0088ff'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: '#ff0000'
            },
            {
              saturation: -100
            },
            {
              lightness: 99
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#808080'
            },
            {
              lightness: 54
            }
          ]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ece2d9'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry.fill',
          stylers: [
            {
              color: '#ccdca1'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#767676'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'poi',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'landscape.natural',
          elementType: 'geometry.fill',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#b8cb93'
            }
          ]
        },
        {
          featureType: 'poi.park',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.sports_complex',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.medical',
          stylers: [
            {
              visibility: 'on'
            }
          ]
        },
        {
          featureType: 'poi.business',
          stylers: [
            {
              visibility: 'simplified'
            }
          ]
        }
      ],
      scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
    };
    const map = new google.maps.Map(
      document.getElementById('contactUs2Map'),
      mapOptions
    );
  
    const marker = new google.maps.Marker({
      position: myLatlng,
      title: 'Melting Sports Consulting'
    });
  
    marker.setMap(map);
  };

  componentDidMount() {
    window.initGoogleMaps = initGoogleMaps;
    {
      initGoogleMaps({
        ...this.props.data.contact.edges[0].node.mapCoordinate
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('locale', this.props.locale);
      }
    }
  }

  render() {
    const { classes, data } = this.props;
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
      <Layout>
        <Helmet>
          <html lang={locale} />
        </Helmet>
        <Header
          color="transparent"
          brand="Melting Sports Consulting"
          rightLinks={<HeaderLinks isRoot routes={navLinks} locale={locale} />}
          fixed
          defaultColor="white"
          alternateColor="#0b3e79"
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          locale={locale}
        />
        {heroEdges.map(({ node }) => (
          <Hero key={node.id} {...node} />
        ))}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {aboutEdges.map(({ node }) => (
              <About key={node.id} {...node} />
            ))}
            {teamEdges.map(({ node }) => (
              <TeamSection key={node.id} {...node} />
            ))}
            {servicesEdges.map(({ node }) => (
              <Services key={node.id} {...node} />
            ))}
          </div>
        </div>
        {contactEdges.map(({ node }) => (
          <ContactUs key={node.id} {...node} />
        ))}

        <Footer isRoot routes={footerNavLinks} locale={locale} />
      </Layout>
    );
  }
}

IndexPage.propTypes = propTypes;

// const Index =

export default withRoot(withStyles(landingPageStyle)(IndexPage));

// const contentfulAssetSizesPreferWebpNoBase64 = graphql`
//   fragment GatsbyContentfulSizes_withWebp_noBase64 on ContentfulSizes {
//     aspectRatio
//     src
//     srcSet
//     srcWebp
//     srcSetWebp
//     sizes
//   }
// `;

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
