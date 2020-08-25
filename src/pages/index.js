import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Post from "../components/Post/Post"

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ImageDIV = styled(Image)`
  width: 40%;
  height: 100vh;
  background-image: url(${(props) => props.image});
  position: absolute;
  top: 0
  right: 60%;
`

const IndexPage = (props) => (
  <ContentWrapper>
    <h1>Home page</h1>
    <Post />
    {console.log(props)}
    {/* <ImageDIV image={props.data.file.childImageSharp.fluid.src}/>
    <img src={props.data.file.childImageSharp.fluid.src} srcSet={props.data.file.childImageSharp.fluid.srcSet} sizes={props.data.file.childImageSharp.fluid.sizes}/> */}
    <ImageDIV fluid={props.data.file.childImageSharp.fluid} />
  </ContentWrapper>

)

// export const query = graphql`
//   {
//     file(name: {eq: "111"}) {
//       publicURL
//     }
//   }
// `

export const query = graphql`
  {
    file(name: {eq: "111"}) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100, duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 50 }) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default IndexPage
