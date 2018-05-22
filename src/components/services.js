import React from 'react';
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";
import {Paper} from 'material-ui';
import withStyles from "material-ui/styles/withStyles";
import teamStyle from "../jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

const Services = ({
    classes = {},
    title = '',
    service
  }) => {

  return (
    <div id="services" className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <GridContainer spacing={16} justify="center">
        {service.map(({id, title, image, description}) => (
          <GridItem key={id} xs={12} sm={12} md={4}>
            <Paper className="service-card">
            <img src={image.resolutions.src} alt={description.description} />
            <div className="service-title">
              <h5 className={classes.projectTitle}>{title}</h5>
            </div>
            <div className="service-description">
              <p className={classes.projectDescription}>{description.description}</p>
            </div>
            </Paper>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default withStyles(teamStyle)(Services);