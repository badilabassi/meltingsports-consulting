import React from 'react';
import * as PropTypes from 'prop-types';

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired
};

class Html extends React.Component {
  render() {
    const { headComponents, body, postBodyComponents } = this.props;

    return (
      <html>
        <head>
          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Melting Sports Consulting website"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="google-site-verification"
            content="4lxgx9-_75_XuakOAjyifgn8CveDRUBoI8e6Fycb368"
          />
          <title>Melting Sports | Consulting</title>
          {headComponents}
          {/* {css} */}
          <link rel="dns-prefetch" href="https://gstatic.com" />
          <link rel="dns-prefetch" href="https://googleapis.com" />
          <link rel="dns-prefetch" href="https://www.google.com" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" 
          />
          <link
            rel="preload"
            as="script"
            href="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0GE3dFR0orMQ7l8PJKtRU_3p99pgbrmw" 
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0GE3dFR0orMQ7l8PJKtRU_3p99pgbrmw"
            async
            defer
          />
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

export default Html;
