import React from 'react';
import GridContainer from './Grid/GridContainer.jsx';
import GridItem from './Grid/GridItem.jsx';
import withStyles from 'material-ui/styles/withStyles';
import teamStyle from '../jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

const About = ({
  classes = {},
  title = '',
  description = '',
  image = null
}) => {
  return (
    <div id="about" className={classes.section}>
      <h2 className={classes.title}>{title}</h2>
      <GridContainer>
        <GridItem
          className="about-item"
          xs={12}
          sm={12}
          md={12}
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <GridItem xs={12} sm={12} md={5} style={{ padding: '0 1rem 0 0' }}>
            {!!image && (
              <img
                src={image.resolutions.src}
                srcSet={image.resolutions.srcSet}
                alt={title}
              />
            )}
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: description.markdown.html }}
            />
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default withStyles(teamStyle)(About);
