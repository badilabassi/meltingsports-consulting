import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import classNames from 'classnames'
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import withStyles from "material-ui/styles/withStyles";

import GridContainer from "../components/Grid/GridContainer.jsx";
import GridItem from "../components/Grid/GridItem.jsx";
import Card from "../components/Card/Card.jsx";
import CardBody from "../components/Card/CardBody.jsx";

import landingPageStyle from "../jss/material-kit-react/views/landingPage.jsx";
import Hero from '../components/hero';
import TeamSection from '../components/team';
import { Grid } from "material-ui";

const propTypes = {
  data: PropTypes.object.isRequired,
}

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data);
    const {classes} = this.props;
    const heroEdges = this.props.data.hero.edges
    const aboutEdges = this.props.data.about.edges
    const teamEdges = this.props.data.team.edges
    console.log(teamEdges);
    return (
      <div style={{ marginBottom: rhythm(2) }}>
        {heroEdges.map(({node}, i) => (
          <Hero node={node} key={node.id} classes={this.props.classes} />
        ))}
         <div id="about" className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer>
              {aboutEdges.map(({node}, id) => {
                const isOdd = id % 2 !== 0
                return (
                <GridItem key={node.id} xs={12} sm={12} md={12} style={{
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
          </div>
        </div>
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
