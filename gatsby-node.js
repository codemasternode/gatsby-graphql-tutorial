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
            body
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
                post
            },
        })
    })
}