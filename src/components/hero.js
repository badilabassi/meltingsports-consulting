import React from 'react';
import Parallax from "./Parallax/Parallax.jsx";
import GridContainer from "./Grid/GridContainer.jsx";
import GridItem from "./Grid/GridItem.jsx";

const Hero = ({ classes = {}, node }) => {
  console.log(node);
  const {title, description: { description }, image} = node
  return (
    <Parallax filter image={image.resolutions.src}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>{title}</h1>
            <h4>
              {description}
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </Parallax>
    // <div id="hero" style={{
    //   background: `url(${image.resolutions.src})`,
    //   backgroundSize: "cover",
    //   backgroundAttachment: "fixed",
    //   backgroundPosition: "10% 0%",
    //   padding: "200px 0 280px 0",
    //   position: "relative",
    //   }}>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-10 col-md-offset-2">
    //         <div className="block">
    //           <h1 className="animated fadeInUp text-uppercase">{title}</h1>
    //           <p className="animated fadeInUp">{description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;