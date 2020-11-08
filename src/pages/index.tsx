import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Organisms/bio"
import Layout from "../components/Atoms/layout"
import SEO from "../components/Organisms/seo"
import Article from '../components/Organisms/article'

import { rhythm } from "../utils/typography"
import styled from "styled-components"

const _Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BlogIndex = ({ data, location }: { data: any, location: Location }) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const noImage = data.file
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      <_Container>
      {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <Article
            key={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            path={node.fields.slug}
            image={node.frontmatter.avatar ? node.frontmatter.avatar.childImageSharp.fluid : noImage}
          />
        )
      })}
      </_Container>
    </Layout>
  )
}

export default BlogIndex

//　画像を読み込む場合
// file(relativePath: { regex: "/noimage.png/" }) {
//   childImageSharp {
//     # Specify the image processing specifications right in the query.
//     # Makes it trivial to update as your page's design changes.
//     fixed(width: 400, height: 700) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90, maxHeight: 700) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
