import React from 'react';
import Parallax from "./Parallax/Parallax.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";
import withStyles from "material-ui/styles/withStyles";
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx'

const Hero = ({
    classes = {},
    title = '',
    description = '',
    image = null
  }) => {

  return (
    <Parallax filter image={!!image ? image.resolutions.src : ''}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10}>
            <h1 className={classes.title}>{title}</h1>
            <h4>
              {description.description}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
  )
}

export default withStyles(landingPageStyle)(Hero);