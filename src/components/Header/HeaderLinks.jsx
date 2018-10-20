/* eslint-disable */
import { Link } from 'gatsby';
/* eslint-disable */
import React from 'react';
// react components for routing our app without refresh
// import { Link } from 'gatsby-link'

// material-ui components
import withStyles from 'material-ui/styles/withStyles';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

import Tooltip from 'material-ui/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';
// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';
import Button from '../CustomButtons/Button.jsx';
import IconButton from '../CustomButtons/IconButton.jsx';
import headerLinksStyle from '../../jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { locale, classes, routes } = props;

  const generateLink = navId => {
    if (!!navId && navId.includes('/')) {
      return navId;
    }
    if (locale === 'en') {
      return `/${locale}/#${navId}`;
    }
    return `/#${navId}`;
  };

  return (
    <List className={classes.list}>
      {routes.map(({ id, navId, title }) => (
        <ListItem key={navId} className={classes.listItem}>
          <Link
            to={generateLink(navId.replace('/#', ''))}
            color="transparent"
            className={classes.navLink}
          >
            {title}
          </Link>
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <Link to="/" color="transparent" className={classes.navLink}>
          Fr
        </Link>
        <Link to="/en" color="transparent" className={classes.navLink}>
          En
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
