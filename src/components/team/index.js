import React from 'react';
import { Link } from 'gatsby-link';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui components
import withStyles from 'material-ui/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from '../Grid/GridContainer.jsx';
import GridItem from '../Grid/GridItem.jsx';
import Card from '../Card/Card.jsx';
import CardBody from '../Card/CardBody.jsx';
import CardFooter from '../Card/CardFooter.jsx';
import IconButton from '../CustomButtons/IconButton.jsx';

import teamStyle from '../../jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

class TeamSection extends React.Component {
  render() {
    const { classes, title, team } = this.props;

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div id="team" className={classes.section}>
        <h2 className={classes.title}>{title}</h2>
        <div>
          <GridContainer>
            {team.map(
              ({
                id,
                name,
                position,
                experience,
                experienceTitle,
                summary,
                image,
                linkedInLink = '/'
              }) => {
                return (
                  <GridItem key={id} xs={12} sm={12} md={4}>
                    <Card plain>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={6}
                        className={classes.itemGrid}
                      >
                        {!!image && (
                          <img
                            src={image.resolutions.src}
                            srcSet={image.resolutions.srcSet}
                            alt={name}
                            className={imageClasses}
                          />
                        )}
                      </GridItem>
                      <h4 className={classes.cardTitle}>
                        {name}
                        <br />
                        <small className={classes.smallTitle}>{position}</small>
                      </h4>
                      {!!(linkedInLink !== '/') && (
                        <a
                          className={`${classes.button} ${
                            classes.linkedInButton
                          } ${classes['white']} `}
                          href={linkedInLink}
                          target="__blank"
                        >
                          <i
                            className={`${classes.socials} ${
                              classes.linkedIn
                            } fab fa-linkedin`}
                          />
                        </a>
                      )}
                      <CardBody>
                        <div
                          className={classes.description}
                          dangerouslySetInnerHTML={{
                            __html: summary.markdown.html
                          }}
                        />
                      </CardBody>
                    </Card>
                  </GridItem>
                );
              }
            )}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
