import React from 'react';
import Index from '../index';
import { graphql } from 'gatsby'
export default Index;

export const pageQueryEn = graphql`
  query PageQueryEn {
    cgu: allContentfulTermsOfService(filter: { node_locale: { eq: "en-US" } }) {
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
    hero: allContentfulHero(filter: { node_locale: { eq: "en-US" } }) {
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
    about: allContentfulAbout(filter: { node_locale: { eq: "en-US" } }) {
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
    team: allContentfulTeamSection(filter: { node_locale: { eq: "en-US" } }) {
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
    services: allContentfulServices(filter: { node_locale: { eq: "en-US" } }) {
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
    contact: allContentfulContactForm(
      filter: { node_locale: { eq: "en-US" } }
    ) {
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
