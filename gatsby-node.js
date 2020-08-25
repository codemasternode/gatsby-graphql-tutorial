const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)

  const result = await graphql(
      `
      query MyQuery {
        allMdx {
          nodes {
            frontmatter {
              title
              slug
              author
              customProp
              featuredImage {
                childImageSharp{
                  fluid(maxWidth: 700, maxHeight: 500) {
                    src
                  }
                }
              }
            }
            excerpt(pruneLength: 20)
          }
        }
      }
      `
  )
  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: `articles/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // Add optional context data to be inserted
        // as props into the page component..
        //
        // The context data can also be used as
        // arguments to the page GraphQL query.
        //
        // The page "path" is always available as a GraphQL
        // argument.
      },
    })
  })
}