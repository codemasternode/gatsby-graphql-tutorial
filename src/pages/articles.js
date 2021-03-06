import React from "react"
import { graphql, Link } from "gatsby"
import Image from 'gatsby-image'
import styled from "styled-components"


export const query = graphql`
    {
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
                        ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
              excerpt(pruneLength: 20)
            }
          }
    }
`

const LinkWrapper = styled(Link)`
    display: block;
`

const ArticlesPage = ({ data }) => (
    <>
        <h1>Articles</h1>
        {console.log(data)}
        {
            data.allMdx.nodes.map((value, index) => (
                <LinkWrapper to={`/articles/${value.frontmatter.slug}`} key={index}>
                    <h2>{value.frontmatter.title}</h2>
                    <p>{value.frontmatter.slug}</p>
                    <p>{value.frontmatter.author}</p>
                    <Image fluid={value.frontmatter.featuredImage.childImageSharp.fluid}/>
                </LinkWrapper>
            ))
        }
    </>
)

export default ArticlesPage
