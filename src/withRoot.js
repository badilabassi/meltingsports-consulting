import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from './getPageContext';

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.pageContext = this.props.pageContext || getPageContext();
    }

    // componentDidMount() {
    //   // Remove the server-side injected CSS.
    //   const jssStyles = document.querySelector('#server-side-jss');
    //   if (jssStyles && jssStyles.parentNode) {
    //     jssStyles.parentNode.removeChild(jssStyles);
    //   }
    // }

    pageContext = null;

    render() {
      const locale = this.props.location.pathname.includes('/en')
        ? 'en-US'
        : 'fr';

      // console.log(this.pageContext)

      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        // <MuiThemeProvider
        //   theme={this.pageContext.theme}
        //   sheetsManager={this.pageContext.sheetsManager}
        // >
        //   {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        //   <CssBaseline />
        //   <Component {...this.props} locale={locale} />
        // </MuiThemeProvider>
        <Component {...this.props} locale={locale} />
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object
  };

  return WithRoot;
}

export default withRoot;
