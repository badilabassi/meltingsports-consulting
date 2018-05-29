import React from 'react';
import classNames from 'classnames';

import GridContainer from '../Grid/GridContainer.jsx';
import teamStyle from '../../jss/material-kit-react/views/landingPageSections/teamStyle.jsx';
import withStyles from 'material-ui/styles/withStyles';

import Profile from './profile';

const TeamSection = ({ classes, title, team }) => {
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
          {team.map(props => (
            <Profile
              key={props.id}
              classes={classes}
              imageClasses={imageClasses}
              {...props}
            />
          ))}
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(teamStyle)(TeamSection);
