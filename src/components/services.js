import React from 'react';
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";
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
      <GridContainer style={{display: "flex"}}>
        {service.map(({id, title, image, description}) => (
          <GridItem key={id} xs={6} sm={6} md={4} style={{position: "relative", border: "1em solid transparent"}}>
            <img src={image.resolutions.src} alt={description.description} />
            <div style={{background: "rgba(0,0,0,.5)", position: "absolute", top: 0, bottom: 0, left: 0, right: 0}} />
            <div style={{position: "absolute", top: "50%",left: 0, width: "100%", transform: "translateY(-50%)"}}>
              <h5 className={classes.projectTitle}>{title}</h5>
              <p className={classes.projectDescription}>{description.description}</p>
            </div>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default withStyles(teamStyle)(Services);