// const path = require(`path`);

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators;

//   if (node.internal.type === `MarkdownRemark`) {
//     const fileNode = getNode(node.parent);
//     let nodeSlug;
//     nodeSlug = ensureSlashes(
//       path.basename(fileNode.relativePath, path.extname(fileNode.relativePath))
//     );
//     if (nodeSlug) {
//       createNodeField({ node, name: `slug`, value: nodeSlug });
//     }
//   }
// };

// function ensureSlashes(slug) {
//   if (slug.charAt(0) !== `/`) {
//     slug = `/` + slug;
//   }

//   if (slug.charAt(slug.length - 1) !== `/`) {
//     slug = slug + `/`;
//   }

//   return slug;
// }

// // const _ = require(`lodash`);
// // const Promise = require(`bluebird`);
// // const path = require(`path`);
// // const slash = require(`slash`);

// // // Implement the Gatsby API “createPages”. This is
// // // called after the Gatsby bootstrap is finished so you have
// // // access to any information necessary to programmatically
// // // create pages.
// // exports.createPages = ({ graphql, boundActionCreators }) => {
// //   const { createPage } = boundActionCreators;
// //   return new Promise((resolve, reject) => {
// //     // The “graphql” function allows us to run arbitrary
// //     // queries against the local Contentful graphql schema. Think of
// //     // it like the site has a built-in database constructed
// //     // from the fetched data that you can run queries against.
// //     graphql(
// //       `
// //         {
// //           allContentfulHero(limit: 1000) {
// //             edges {
// //               node {
// //                 id
// //                 contentful_id
// //                 language: node_locale
// //               }
// //             }
// //           }
// //         }
// //       `
// //     ).then(result => {
// //       if (result.errors) {
// //         reject(result.errors);
// //       }

// //       // Create Product pages
// //       const heroTemplate = path.resolve(`./src/templates/hero.js`);
// //       // We want to create a detailed page for each
// //       // product node. We'll just use the Contentful id for the slug.
// //       _.each(result.data.allContentfulHero.edges, ({ node }) => {
// //         // Gatsby uses Redux to manage its internal state.
// //         // Plugins and sites can use functions like "createPage"
// //         // to interact with Gatsby.
// //         const { id, contentful_id, language } = node;

// //         createPage({
// //           // Each page is required to have a `path` as well
// //           // as a template component. The `context` is
// //           // optional but is often necessary so the template
// //           // can query data specific to each page.
// //           path: `/hero/${id}/`,
// //           component: slash(heroTemplate),
// //           context: {
// //             id
// //           }
// //         });
// //       });

// //       resolve();
// //     });
// //     //   .then(() => {
// //     //     graphql(
// //     //       `
// //     //         {
// //     //           allContentfulCategory(limit: 1000) {
// //     //             edges {
// //     //               node {
// //     //                 id
// //     //               }
// //     //             }
// //     //           }
// //     //         }
// //     //       `
// //     //     ).then(result => {
// //     //       if (result.errors) {
// //     //         reject(result.errors)
// //     //       }

// //     //       // Create Category pages
// //     //       const categoryTemplate = path.resolve(`./src/templates/category.js`)
// //     //       // We want to create a detailed page for each
// //     //       // category node. We'll just use the Contentful id for the slug.
// //     //       _.each(result.data.allContentfulCategory.edges, edge => {
// //     //         // Gatsby uses Redux to manage its internal state.
// //     //         // Plugins and sites can use functions like "createPage"
// //     //         // to interact with Gatsby.
// //     //         createPage({
// //     //           // Each page is required to have a `path` as well
// //     //           // as a template component. The `context` is
// //     //           // optional but is often necessary so the template
// //     //           // can query data specific to each page.
// //     //           path: `/categories/${edge.node.id}/`,
// //     //           component: slash(categoryTemplate),
// //     //           context: {
// //     //             id: edge.node.id,
// //     //           },
// //     //         })
// //     //       })

// //     //       resolve()
// //     //     })
// //     //   })
// //   });
// // };
