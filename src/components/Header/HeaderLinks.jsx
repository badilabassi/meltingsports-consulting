/* eslint-disable */
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'gatsby-link'

// material-ui components
import withStyles from 'material-ui/styles/withStyles'
import List from 'material-ui/List'
import ListItem from 'material-ui/List/ListItem'
import Tooltip from 'material-ui/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx'
import Button from '../CustomButtons/Button.jsx'
import IconButton from '../CustomButtons/IconButton.jsx'

import headerLinksStyle from '../../jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <a
          href="#about"
          color="transparent"
          className={classes.navLink}
        >
          A propos
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="#team"
          color="transparent"
          className={classes.navLink}
        >
          Notre Equipe
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="#services"
          color="transparent"
          className={classes.navLink}
        >
          Services
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="#contact"
          color="transparent"
          className={classes.navLink}
        >
          Contact
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a
          href="/"
          color="transparent"
          className={classes.navLink}
        >
          Fr
        </a>
        <a
          href="/en"
          color="transparent"
          className={classes.navLink}
        >
          En
        </a>
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
