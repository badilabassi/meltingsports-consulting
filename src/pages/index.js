import React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { rhythm } from '../utils/typography'
import Img from 'gatsby-image'
import withStyles from 'material-ui/styles/withStyles'
import 'font-awesome/css/font-awesome.min.css'

import GridContainer from '../components/Grid/GridContainer.jsx'
import GridItem from '../components/Grid/GridItem.jsx'
import Card from '../components/Card/Card.jsx'
import CardBody from '../components/Card/CardBody.jsx'

import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx'


import Hero from '../components/hero'
import About from '../components/about'
import TeamSection from '../components/team'
import Services from '../components/services'
import ContactUs from '../components/contact'

import { initGoogleMaps } from '../utils/googleMaps'

const propTypes = {
  data: PropTypes.object.isRequired
}

class IndexPage extends React.Component {
  componentDidMount() {
    window.initGoogleMaps = initGoogleMaps
    initGoogleMaps()
  }

  render() {
    const { classes, data } = this.props
    const heroEdges = data.hero.edges
    const aboutEdges = data.about.edges
    const teamEdges = data.team.edges
    const servicesEdges = data.services.edges

    return (
      <div style={{ marginBottom: rhythm(2) }}>
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

            {servicesEdges.map(({node}) => (
              <Services key={node.id} {...node} />
            ))}
          </div>
        </div>
        <ContactUs />
      </div>
    )
  }
}

IndexPage.propTypes = propTypes

export default withStyles(landingPageStyle)(IndexPage)

export const pageQuery = graphql`
  query PageQuery {
    hero: allContentfulHero {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            resolutions(width: 1920) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
    about: allContentfulAbout {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
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
    team: allContentfulTeamSection {
      edges {
        node {
          id
          title
          team {
            id
            image {
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
            }
            experience
            linkedInLink
          }
        }
      }
    }
    services: allContentfulServices {
      edges {
        node {
          id
          title
          service {
            id
            image {
              resolutions(width: 1920) {
                width
                height
                src
                srcSet
              }
            }
            title
            description {
              description
            }
          }
        }
      }
    }
  }
`
