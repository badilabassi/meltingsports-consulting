import React from "react"
// import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import classNames from 'classnames'
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import withStyles from "material-ui/styles/withStyles";
import 'font-awesome/css/font-awesome.min.css'

import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";

import landingPageStyle from "../jss/material-kit-react/views/landingPage.jsx";
import Hero from '../components/hero';
import TeamSection from '../components/team';
import ContactUs from '../components/contact';

import { initGoogleMaps } from '../utils/googleMaps';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  componentDidMount() {
    window.initGoogleMaps = initGoogleMaps;
    initGoogleMaps();
  }

  render() {

    const {classes, data} = this.props;
    const heroEdges = data.hero.edges
    const aboutEdges = data.about.edges
    const teamEdges = data.team.edges

    return (
      <div style={{ marginBottom: rhythm(2) }}>
        {heroEdges.map(({node}) => <Hero node={node} key={node.id} classes={this.props.classes} />)}
         <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer id="about">
              {aboutEdges.map(({node}, id) => {
                const isOdd = id % 2 !== 0
                return (
                <GridItem className="about-item" key={node.id} xs={12} sm={12} md={12} style={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: isOdd ? "row-reverse" : "row"
                }}>
                  <GridItem xs={12} sm={12} md={5}>
                    <img src={node.image.resolutions.src} alt="" />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={7}>
                    <h2 className={classes.aboutTitle}>{node.title}</h2>
                    <h5 className={classes.aboutDescription}>{node.description.description}</h5>
                  </GridItem>
                </GridItem>
              )})}
            </GridContainer>
            <TeamSection team={teamEdges} />
            <GridContainer id="services">
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classes.aboutTitle}>Nos Services</h2>
                <h5 className={classes.aboutDescription}>Pas fini de faire cette section.</h5>
              </GridItem>
            </GridContainer>
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
    team: allContentfulTeam {
      edges {
        node {
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
        }
      }
    }
  }
`
