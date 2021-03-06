import { Link } from 'gatsby';
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// core components
import headerStyle from '../../jss/material-kit-react/components/headerStyle.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      color: '#fff'
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener('scroll', this.headerColorChange);
    }
  }
  headerColorChange() {
    const { classes, color, changeColorOnScroll } = this.props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
      this.setState({ color: this.props.alternateColor });
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
      this.setState({ color: this.props.defaultColor });
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener('scroll', this.headerColorChange);
    }
  }

  render() {
    const {
      classes,
      color,
      locale,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute
    } = this.props;

    const generateLink = navId => {
      if (!!navId && navId.includes('/')) {
        return navId;
      }
      if (locale === 'en') {
        return `/${locale}/#${navId}`;
      }
      return `/#${navId}`;
    };

    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    const brandComponent = (
      <Link to={generateLink('hero')}>
        <Button className={classes.title}>
          <svg
            style={{ width: '90%', fill: this.state.color }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 158.97 25.75"
          >
            <path
              className="cls-1"
              d="M14,19.87a5.17,5.17,0,0,0,1.19-.13,3,3,0,0,0,1-.43,2.17,2.17,0,0,0,.7-.77,2.77,2.77,0,0,0,0-2.32,2,2,0,0,0-.66-.76,2.76,2.76,0,0,0-1-.41A5.25,5.25,0,0,0,14,14.92H11.07v8H13v-3Zm-1-3.4h.84a4.24,4.24,0,0,1,.51,0,1.21,1.21,0,0,1,.43.14.68.68,0,0,1,.3.28,1,1,0,0,1,0,.92.75.75,0,0,1-.31.3,1.29,1.29,0,0,1-.44.16,3,3,0,0,1-.52,0H13Z"
            />
            <path
              className="cls-1"
              d="M6.09,21.3a1,1,0,0,1-.35.15,1.93,1.93,0,0,1-.42,0,2.12,2.12,0,0,1-1-.24,2.45,2.45,0,0,1-.77-.6L2.34,21.93a3.58,3.58,0,0,0,1.33.85,4.64,4.64,0,0,0,1.65.3,4.36,4.36,0,0,0,1.14-.16,3.2,3.2,0,0,0,1-.48,2.51,2.51,0,0,0,.68-.83,2.58,2.58,0,0,0,.25-1.19,1.91,1.91,0,0,0-.24-1,2.12,2.12,0,0,0-.59-.67,3.24,3.24,0,0,0-.8-.43L5.9,18l-.51-.17A2.36,2.36,0,0,1,5,17.67a.69.69,0,0,1-.24-.24.58.58,0,0,1-.09-.33.67.67,0,0,1,.11-.39A1,1,0,0,1,5,16.46a1.4,1.4,0,0,1,.36-.13l.38,0A1.9,1.9,0,0,1,7.2,17l1.23-1.29A3.76,3.76,0,0,0,7.19,15a4.18,4.18,0,0,0-1.37-.25,4.13,4.13,0,0,0-1.11.15,3,3,0,0,0-1,.44,2.19,2.19,0,0,0-1,1.91,2.32,2.32,0,0,0,.17.92,2.14,2.14,0,0,0,.46.64A2.51,2.51,0,0,0,4,19.2a6.67,6.67,0,0,0,.74.29l.71.23A2.43,2.43,0,0,1,6,20a1,1,0,0,1,.32.28.64.64,0,0,1,.11.39.84.84,0,0,1-.09.4A.78.78,0,0,1,6.09,21.3Z"
            />
            <path
              className="cls-1"
              d="M50.49,21.3a1,1,0,0,1-.35.15,1.87,1.87,0,0,1-.42,0,2.12,2.12,0,0,1-.95-.24,2.45,2.45,0,0,1-.77-.6l-1.25,1.28a3.46,3.46,0,0,0,1.32.85,4.64,4.64,0,0,0,1.65.3,4.36,4.36,0,0,0,1.14-.16,3.2,3.2,0,0,0,1-.48,2.51,2.51,0,0,0,.68-.83,2.58,2.58,0,0,0,.25-1.19,1.91,1.91,0,0,0-.24-1,2.12,2.12,0,0,0-.59-.67,3.24,3.24,0,0,0-.8-.43L50.3,18l-.51-.17a2.36,2.36,0,0,1-.39-.19.78.78,0,0,1-.24-.24.58.58,0,0,1-.09-.33.67.67,0,0,1,.11-.39,1,1,0,0,1,.26-.25,1.4,1.4,0,0,1,.36-.13l.38,0A1.9,1.9,0,0,1,51.6,17l1.23-1.29A3.82,3.82,0,0,0,51.6,15a4.29,4.29,0,0,0-1.38-.25,4.13,4.13,0,0,0-1.11.15,3,3,0,0,0-1,.44,2.19,2.19,0,0,0-1,1.91,2.32,2.32,0,0,0,.17.92,2.14,2.14,0,0,0,.46.64,2.68,2.68,0,0,0,.66.43,6.67,6.67,0,0,0,.74.29l.71.23a2.43,2.43,0,0,1,.51.24,1,1,0,0,1,.32.28.65.65,0,0,1,.12.39.84.84,0,0,1-.09.4A.72.72,0,0,1,50.49,21.3Z"
            />
            <polygon
              className="cls-1"
              points="42.84 22.87 42.84 16.56 45.09 16.56 45.09 14.92 38.67 14.92 38.67 16.56 40.92 16.56 40.92 22.87 42.84 22.87"
            />
            <path
              className="cls-1"
              d="M36.77,17.32a2.32,2.32,0,0,0-.26-1.14,2.07,2.07,0,0,0-.69-.75,3.06,3.06,0,0,0-1-.4,5.83,5.83,0,0,0-1.12-.11h-3v8h1.89V19.72h.65L35,22.87H37.2l-2.08-3.4a2.4,2.4,0,0,0,1.21-.79A2.13,2.13,0,0,0,36.77,17.32Zm-2,.53a.83.83,0,0,1-.33.29,1.39,1.39,0,0,1-.45.14,2.67,2.67,0,0,1-.48,0h-.91V16.47h1l.44,0a1.29,1.29,0,0,1,.42.13.77.77,0,0,1,.3.27.81.81,0,0,1,.12.46A.83.83,0,0,1,34.74,17.85Z"
            />
            <path
              className="cls-1"
              d="M21.92,22.78a5,5,0,0,0,3.46,0,3.93,3.93,0,0,0,1.38-.86,3.86,3.86,0,0,0,.9-1.33A4.41,4.41,0,0,0,28,18.86a4.29,4.29,0,0,0-.33-1.72,3.69,3.69,0,0,0-.9-1.31A4,4,0,0,0,25.38,15a5.14,5.14,0,0,0-3.46,0,4.06,4.06,0,0,0-1.37.83,3.83,3.83,0,0,0-.9,1.31,4.29,4.29,0,0,0-.33,1.72,4.41,4.41,0,0,0,.33,1.73,3.91,3.91,0,0,0,2.27,2.19Zm-.38-4.88a2.21,2.21,0,0,1,.47-.77,2.05,2.05,0,0,1,.72-.51,2.29,2.29,0,0,1,.92-.19,2.34,2.34,0,0,1,.93.19,2.05,2.05,0,0,1,.72.51,2.19,2.19,0,0,1,.46.77,2.55,2.55,0,0,1,.17,1,2.73,2.73,0,0,1-.17,1,2.36,2.36,0,0,1-.47.78,2.05,2.05,0,0,1-.72.51,2.44,2.44,0,0,1-1.84,0,2.05,2.05,0,0,1-.72-.51,2.51,2.51,0,0,1-.46-.78,3,3,0,0,1-.17-1A2.76,2.76,0,0,1,21.54,17.9Z"
            />
            <polygon
              className="cls-1"
              points="19.38 4.61 19.38 2.98 14.03 2.98 14.03 10.93 19.58 10.93 19.58 9.29 15.88 9.29 15.88 7.64 19.18 7.64 19.18 6.1 15.88 6.1 15.88 4.61 19.38 4.61"
            />
            <polygon
              className="cls-1"
              points="21.14 2.98 21.14 10.93 26.16 10.93 26.16 9.26 23.08 9.26 23.08 2.98 21.14 2.98"
            />
            <polygon
              className="cls-1"
              points="12.09 10.93 12.09 2.98 9.31 2.98 7.58 8.08 7.54 8.08 5.73 2.98 3 2.98 3 10.93 4.81 10.93 4.76 5.3 4.79 5.3 6.81 10.93 8.16 10.93 10.22 5.3 10.26 5.3 10.21 10.93 12.09 10.93"
            />
            <polygon
              className="cls-1"
              points="39.35 2.98 37.16 2.98 37.16 10.93 39.02 10.93 38.98 5.73 39.01 5.73 42.21 10.93 44.39 10.93 44.39 2.98 42.53 2.98 42.57 8.17 42.54 8.17 39.35 2.98"
            />
            <path
              className="cls-1"
              d="M48.67,5.16a2.42,2.42,0,0,1,.74-.52,2.37,2.37,0,0,1,.93-.18,2.52,2.52,0,0,1,1,.21,2.07,2.07,0,0,1,.74.53l1.21-1.38A3.55,3.55,0,0,0,52,3.05a5.27,5.27,0,0,0-1.75-.29,4.93,4.93,0,0,0-1.7.29,4.15,4.15,0,0,0-1.37.84,3.78,3.78,0,0,0-.92,1.32A4.41,4.41,0,0,0,46,6.94a4.36,4.36,0,0,0,.33,1.72,3.78,3.78,0,0,0,.9,1.32,4.21,4.21,0,0,0,1.38.85,5,5,0,0,0,1.76.3,7,7,0,0,0,1.7-.19,5.77,5.77,0,0,0,1.37-.49V6.23H50.12V7.79h1.52V9.24a3.16,3.16,0,0,1-.57.16,4.26,4.26,0,0,1-.64,0,2.64,2.64,0,0,1-1-.19,2,2,0,0,1-.76-.51,2.2,2.2,0,0,1-.47-.8,3.19,3.19,0,0,1-.16-1,2.64,2.64,0,0,1,.18-1A2.35,2.35,0,0,1,48.67,5.16Z"
            />
            <rect
              className="cls-1"
              x="33.29"
              y="2.98"
              width="1.93"
              height="7.96"
            />
            <polygon
              className="cls-1"
              points="29.87 10.93 29.87 4.62 32.12 4.62 32.12 2.98 25.7 2.98 25.7 4.62 27.95 4.62 27.95 10.93 29.87 10.93"
            />
            <polygon
              className="cls-1"
              points="86.5 10.06 90.71 16.55 92.11 16.55 92.11 8.6 91 8.6 91 14.96 90.98 14.96 86.82 8.6 85.37 8.6 85.37 16.55 86.48 16.55 86.48 10.06 86.5 10.06"
            />
            <path
              className="cls-1"
              d="M75.6,16.45a4.88,4.88,0,0,0,3.37,0,4.08,4.08,0,0,0,1.34-.87,4,4,0,0,0,.88-1.33,4.39,4.39,0,0,0,.32-1.69,4.44,4.44,0,0,0-.32-1.7A3.77,3.77,0,0,0,79,8.7a4.73,4.73,0,0,0-3.37,0,4.07,4.07,0,0,0-1.33.84,4,4,0,0,0-.88,1.32,4.44,4.44,0,0,0-.31,1.7,4.39,4.39,0,0,0,.31,1.69,4,4,0,0,0,.88,1.33A4.14,4.14,0,0,0,75.6,16.45Zm-1.1-5.12a3.27,3.27,0,0,1,.6-1A2.83,2.83,0,0,1,76,9.62a3,3,0,0,1,3.45.69,3.27,3.27,0,0,1,.6,1,3.39,3.39,0,0,1,.22,1.23,3.46,3.46,0,0,1-.22,1.25,3.06,3.06,0,0,1-.6,1,2.89,2.89,0,0,1-1,.68,3.13,3.13,0,0,1-1.25.24,3,3,0,0,1-1.23-.24,3,3,0,0,1-1-.68,3.06,3.06,0,0,1-.6-1,3.46,3.46,0,0,1-.22-1.25A3.39,3.39,0,0,1,74.5,11.33Z"
            />
            <path
              className="cls-1"
              d="M99.55,15.47a1.35,1.35,0,0,1-.51.25,2.23,2.23,0,0,1-.56.08,2.16,2.16,0,0,1-1-.26,2.21,2.21,0,0,1-.75-.67l-.86.73a2.79,2.79,0,0,0,1.16.86,3.65,3.65,0,0,0,1.45.29,3.51,3.51,0,0,0,1-.14,2.67,2.67,0,0,0,.89-.45,2.26,2.26,0,0,0,.61-.75,2.38,2.38,0,0,0,.23-1.07,2,2,0,0,0-.22-1,2,2,0,0,0-.55-.64,3,3,0,0,0-.75-.42c-.28-.1-.55-.2-.82-.28l-.63-.22a1.81,1.81,0,0,1-.52-.26,1.12,1.12,0,0,1-.35-.37,1,1,0,0,1-.13-.54,1.16,1.16,0,0,1,.14-.58,1.45,1.45,0,0,1,.37-.41,1.64,1.64,0,0,1,.5-.23,2,2,0,0,1,.54-.07,1.93,1.93,0,0,1,.91.2,1.71,1.71,0,0,1,.64.54l.79-.77a2.61,2.61,0,0,0-1-.66,3.31,3.31,0,0,0-1.3-.25,4.2,4.2,0,0,0-1,.13,2.68,2.68,0,0,0-.87.41,2.26,2.26,0,0,0-.63.71,2.05,2.05,0,0,0-.24,1,2.07,2.07,0,0,0,.18.92,1.86,1.86,0,0,0,.47.63,2.23,2.23,0,0,0,.66.41,6.92,6.92,0,0,0,.76.28l.72.24a2.79,2.79,0,0,1,.6.29,1.34,1.34,0,0,1,.41.41,1.11,1.11,0,0,1,.15.6,1.28,1.28,0,0,1-.14.61A1.4,1.4,0,0,1,99.55,15.47Z"
            />
            <path
              className="cls-1"
              d="M65,10.31a2.87,2.87,0,0,1,1-.69,3,3,0,0,1,1.25-.25,2.66,2.66,0,0,1,1.16.26,2.21,2.21,0,0,1,.82.67L70,9.63a2.76,2.76,0,0,0-.54-.54,3.13,3.13,0,0,0-.7-.38,3.53,3.53,0,0,0-.8-.24,4.56,4.56,0,0,0-.82-.08,4.41,4.41,0,0,0-1.68.31,3.75,3.75,0,0,0-2.23,2.16,4.26,4.26,0,0,0-.32,1.7,4.39,4.39,0,0,0,.31,1.69,3.88,3.88,0,0,0,2.2,2.2,4.56,4.56,0,0,0,1.68.3,3.9,3.9,0,0,0,1.81-.39,3.65,3.65,0,0,0,1.22-1l-.89-.61a2.32,2.32,0,0,1-.91.79,2.7,2.7,0,0,1-1.22.27,3.08,3.08,0,0,1-1.24-.25,2.85,2.85,0,0,1-.95-.68,3,3,0,0,1-.59-1,3.7,3.7,0,0,1-.21-1.26,3.61,3.61,0,0,1,.21-1.23A3.5,3.5,0,0,1,65,10.31Z"
            />
            <path
              className="cls-1"
              d="M149.3,10.31a2.81,2.81,0,0,1,1-.69,3,3,0,0,1,1.26-.25,3.12,3.12,0,0,1,1.24.24,2.4,2.4,0,0,1,.91.63l.78-.81a3.56,3.56,0,0,0-1.24-.76,5,5,0,0,0-1.71-.28,4.44,4.44,0,0,0-1.68.31,3.83,3.83,0,0,0-2.23,2.16,4.26,4.26,0,0,0-.32,1.7,4.39,4.39,0,0,0,.31,1.69,3.82,3.82,0,0,0,.88,1.33,4,4,0,0,0,1.34.87,4.74,4.74,0,0,0,1.72.3,6.78,6.78,0,0,0,1.61-.18,6,6,0,0,0,1.38-.51V12.2h-2.87v1h1.76v2.21a2.64,2.64,0,0,1-.82.29,4.74,4.74,0,0,1-1,.1,3.28,3.28,0,0,1-1.28-.24,2.83,2.83,0,0,1-1-.68,3.26,3.26,0,0,1-.61-1,3.69,3.69,0,0,1-.21-1.25,3.61,3.61,0,0,1,.21-1.23A3.5,3.5,0,0,1,149.3,10.31Z"
            />
            <polygon
              className="cls-1"
              points="137.79 10.06 141.99 16.55 143.4 16.55 143.4 8.6 142.28 8.6 142.28 14.96 142.26 14.96 138.1 8.6 136.65 8.6 136.65 16.55 137.77 16.55 137.77 10.06 137.79 10.06"
            />
            <rect
              className="cls-1"
              x="131.27"
              y="8.59"
              width="1.11"
              height="7.96"
            />
            <polygon
              className="cls-1"
              points="125.32 16.55 125.32 9.57 127.87 9.57 127.87 8.6 121.65 8.6 121.65 9.57 124.2 9.57 124.2 16.55 125.32 16.55"
            />
            <path
              className="cls-1"
              d="M105.07,8.59v5a3.86,3.86,0,0,0,.18,1.17,3,3,0,0,0,.57,1,2.92,2.92,0,0,0,1,.7,3.74,3.74,0,0,0,2.74,0,2.92,2.92,0,0,0,1-.7,2.85,2.85,0,0,0,.56-1,3.59,3.59,0,0,0,.19-1.17v-5h-1.11v4.95a3.58,3.58,0,0,1-.1.8,2,2,0,0,1-.34.72,1.51,1.51,0,0,1-.61.5,2.4,2.4,0,0,1-1.87,0,1.66,1.66,0,0,1-.61-.5,2.16,2.16,0,0,1-.33-.72,3.08,3.08,0,0,1-.1-.8V8.59Z"
            />
            <polygon
              className="cls-1"
              points="115.47 8.6 115.47 16.55 120.13 16.55 120.13 15.56 116.58 15.56 116.58 8.6 115.47 8.6"
            />
            <rect
              className="cls-1"
              x="58.26"
              y="0.75"
              width="1.17"
              height="24.36"
            />
          </svg>
        </Button>
      </Link>
    );
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={'right'}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: 'white'
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark'
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.node,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark'
    ]).isRequired
  })
};

export default withStyles(headerStyle)(Header);
