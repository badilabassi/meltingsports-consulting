import React from 'react';
import GridContainer from './Grid/GridContainer.jsx';
import GridItem from './Grid/GridItem.jsx';
import { Paper, withStyles } from '@material-ui/core';
import teamStyle from '../jss/material-kit-react/views/landingPageSections/teamStyle.jsx';
import Img from 'gatsby-image';

const Service = ({ classes, id, title, image, description }) => (
  <GridItem className='service' xs={12} sm={12} md={4}>
    <Paper className="service-card">
      {!!image && (
        // <Img
        //   alt={description.description ? description.description : title }
        //   fluid={image.fluid}
        //   critical
 
        //   fadeIn
        //   {...image}
        // />
        <img 
          src={image.fluid.src}
          srcSet={image.fluid.srcSet}
          alt={description.description ? description.description : title }
        />
      )}
      <div className="service-title">
        <h5 className={classes.projectTitle}>{title}</h5>
      </div>
      <div className="service-description">
        <div
          className={classes.projectDescription}
          dangerouslySetInnerHTML={{
            __html: description.markdown.html
          }}
        />
      </div>
    </Paper>
  </GridItem>
);

const Services = ({ classes = {}, title = '', service }) => {
  return (
    <div id="services" className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <GridContainer className='services' spacing={16} justify="center">
        {service.map(props => (
          <Service key={props.id} classes={classes} {...props} />
        ))}
      </GridContainer>
    </div>
  );
};

export default withStyles(teamStyle)(Services);
