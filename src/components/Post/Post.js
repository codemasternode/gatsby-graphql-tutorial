import React from 'react'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

const query = graphql`
{
    site {
        siteMetadata {
            description
        }
    }
}
`

const Post = () => {
    const data = useStaticQuery(query)
    return (
        // <StaticQuery 
        //     query={
        //         graphql`
        //             {
        //                 site {
        //                     siteMetadata {
        //                         description
        //                     }
        //                 }
        //             }
        //         `
        //     }
        //     render={(props) => {
        //         return (
        //             <p>Hello {props.site.siteMetadata.description}</p>
        //         )
        //     }}

        // />
        <p>Hello {data.site.siteMetadata.description}</p>
    )
}

// Jeśli coś nie jest stroną, tylko komponentem wykorzystywanym na stronie to używamy StaticQuery


export default Post