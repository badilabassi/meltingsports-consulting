import React from 'react';
import * as PropTypes from 'prop-types';

import '../css/style.scss';
import 'animate.css/animate.css';


const propTypes = {
  children: PropTypes.any
};

class Layout extends React.Component {
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

    return <React.Fragment>{children}</React.Fragment>;
  }
}

Layout.propTypes = propTypes;

export default Layout;
