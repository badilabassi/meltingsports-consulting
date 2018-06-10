import React from 'react';
import classNames from 'classnames';

import withRoot from '../withRoot';
import withStyles from 'material-ui/styles/withStyles';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';
import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';

const ThankYouPage = ({ classes, data, locale }) => {
  const { title, copy } = data.contact.edges[0].node;
  const isFr = locale === 'fr';
  return (
    <React.Fragment>
      <div className={classes.staticHeroContainer}>
        <div className={classes.staticHero} style={{ height: '100vh' }}>
          <GridContainer style={{ maxWidth: 500, margin: '0 auto' }}>
            <GridItem xs={12} sm={12} md={12}>
              <h1 className={classes.title}>{title}</h1>
              <div
                className={classes.subtitle}
                style={{ color: '#fff' }}
                dangerouslySetInnerHTML={{ __html: copy.markdown.html }}
              />
              <div>
                <a href={isFr ? '/' : '/en/'} style={{ color: '#fff' }}>
                  ←{' '}
                  {isFr
                    ? 'Retourner a la page principe'
                    : 'Go back to homepage'}
                </a>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRoot(withStyles(landingPageStyle)(ThankYouPage));

export const thanksQuery = graphql`
  query ThanksFr {
    contact: allContentfulContactForm(filter: { node_locale: { eq: "fr" } }) {
      edges {
        node {
          id
          locale: node_locale
          title: thanksTitle
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
