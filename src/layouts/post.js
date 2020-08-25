import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PostLayout = ({ pageContext: { post } }) => {
    return (
        <div>
            <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
            <h1>title</h1>
            <p>author</p>
            <span>image</span>
            <p>Lorem lorem</p>
            <MDXRenderer>{post.body}</MDXRenderer>
        </div>
    )
}

export default PostLayout