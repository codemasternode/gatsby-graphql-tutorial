import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

export const query = graphql`
query FindArticle($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
                title
                slug
                author
                customProp
                featuredImage {
                  childImageSharp{
                    fluid(maxWidth: 700, maxHeight: 500) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
              body
    }
  }
`

const PostLayout = ({ data }) => {
    return (
        <div>
            <Image fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid} />
            <h1>title {data.mdx.frontmatter.title}</h1>
            <p>author {data.mdx.frontmatter.author}</p>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
    )
}

export default PostLayout