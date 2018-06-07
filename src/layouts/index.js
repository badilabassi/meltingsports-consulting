import React from 'react';
import * as PropTypes from 'prop-types';
// import emergence from 'emergence.js';
// import SmoothScroll from 'smooth-scroll';
import 'animate.css/animate.css';
import '../styles/main.scss';

const propTypes = {
  children: PropTypes.func.isRequired
};

class DefaultLayout extends React.Component {
  componentDidMount() {
    // emergence.init();
    if (typeof window !== 'undefined') {
      // Make scroll behavior of internal links smooth
      require('smooth-scroll')('a[href*="#"]', {
        topOnEmptyHash: true,
        speed: 500,
        easing: 'easeInOutCubic',
        popstate: true // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
      });
    }
  }

  // componentDidUpdate() {
  //   emergence.init();
  // }

  render() {
    const { children } = this.props;

    return <React.Fragment>{children()}</React.Fragment>;
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
