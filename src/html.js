import React from 'react';
// import { TypographyStyle } from "react-typography"
import * as PropTypes from 'prop-types';
// import typography from "./utils/typography"

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired
};

class Html extends React.Component {
  render() {
    const { headComponents, body, postBodyComponents } = this.props;
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }

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
          {css}

          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          {process.env.NODE_ENV === 'production' ? (
            <link href="/styles.css" rel="stylesheet" />
          ) : null}
          <link
            href="//use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="//maps.googleapis.com/maps/api/js?key=AIzaSyA0GE3dFR0orMQ7l8PJKtRU_3p99pgbrmw"
          />
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

export default Html;
