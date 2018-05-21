import React from 'react';
import Parallax from "./Parallax/Parallax.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";

const Hero = ({ classes = {}, node }) => {
  const {title = '', description = '', image = null} = node
  // if (global.window === 'undefined') return null

  return (
    <Parallax filter image={!!image ? image.resolutions.src : ''}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
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

export default Hero;