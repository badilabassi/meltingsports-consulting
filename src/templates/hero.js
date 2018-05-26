// import React from 'react';
// import * as PropTypes from 'prop-types';
// import Hero from '../components/hero';

// const propTypes = {
//   data: PropTypes.object.isRequired
// };

// class HeroTemplate extends React.Component {
//   render() {
//     const hero = this.props.data.contentfulHero;
//     return <Hero {...hero} />;
//   }
// }

// HeroTemplate.propTypes = propTypes;

// export default HeroTemplate;

// export const pageQuery = graphql`
//   query heroQuery($id: String!) {
//     contentfulHero(id: { eq: $id }) {
//       id
//       title
//       description {
//         description
//         markdown: childMarkdownRemark {
//           html
//         }
//       }
//       image: slideshow {
//         resolutions(width: 1920) {
//           base64
//           src
//           srcSet
//           height
//           width
//         }
//       }
//     }
//   }
// `;
