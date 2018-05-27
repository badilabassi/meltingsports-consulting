import React from 'react';
import * as PropTypes from 'prop-types';
import emergence from 'emergence.js';

import 'animate.css/animate.css';
import '../styles/main.scss';

const propTypes = {
  children: PropTypes.func.isRequired
};

class DefaultLayout extends React.Component {
  componentDidMount() {
    emergence.init();
  }

  componentDidUpdate() {
    emergence.init();
  }

  render() {
    const { children } = this.props;

    return <React.Fragment>{children()}</React.Fragment>;
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
