import React from 'react';
import classNames from 'classnames';
import withRoot from '../withRoot';
import withStyles from '@material-ui/core/styles/withStyles';
import landingPageStyle from '../jss/material-kit-react/views/landingPage.jsx';
import GridContainer from '../components/Grid/GridContainer.jsx';
import GridItem from '../components/Grid/GridItem.jsx';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ThankYouPage = ({ classes, data }) => {
  let locale = 'fr';
  if (typeof window !== 'undefined') {
    locale = localStorage.getItem('locale');
  }
  const isFr = locale === 'fr';
  // localStorage.getItem('locale')

  const localizedData = isFr ? data.fr.edges[0].node : data.en.edges[0].node;
  const { title, copy, backToHome } = localizedData;

  return (
    <Layout>
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
                  ← {backToHome}
                </a>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </Layout>
  );
};

export default withRoot(withStyles(landingPageStyle)(ThankYouPage));

export const thanksQuery = graphql`
  query ThanksFr {
    fr: allContentfulContactForm(filter: { node_locale: { eq: "fr" } }) {
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
    en: allContentfulContactForm(filter: { node_locale: { eq: "en-US" } }) {
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
