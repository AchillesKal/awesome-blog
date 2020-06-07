const fs = require('fs');

exports.onPreBootstrap = ({reporter}, options) => {
  const contentPath = 'src/data';

  if(!fs.existsSync(contentPath)) {
      reporter.info(`Creating the ${contentPath} directory`);
      fs.mkdirSync(contentPath);
  }
}

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Post implements Node @dontInfer {
      id: ID!
      title: String!
      date: Date @dateformat
    }
  `)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  actions.createPage({
    path: '/',
    component: require.resolve(`./src/templates/index.js`),
  })

  actions.createPage({
    path: '/blog',
    component: require.resolve(`./src/templates/blog.js`),
  })
  
    const blogPostTemplate = require.resolve(`./src/templates/singleBlogPost.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      actions.createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }