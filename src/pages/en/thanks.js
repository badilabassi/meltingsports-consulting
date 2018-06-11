import React from 'react';
// import * as PropTypes from 'prop-types';
// import classNames from 'classnames';
// import Img from 'gatsby-image';
// import withStyles from 'material-ui/styles/withStyles';
// import 'font-awesome/css/font-awesome.min.css';
// import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';

import ThankYouPage from '../thanks';

export default ThankYouPage;

export const thanksQueryEn = graphql`
  query ThanksEN {
    contact: allContentfulContactForm(
      filter: { node_locale: { eq: "en-US" } }
    ) {
      edges {
        node {
          id
          locale: node_locale
          title: thanksTitle
          backToHome
          copy: thanksCopy {
            markdown: childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
