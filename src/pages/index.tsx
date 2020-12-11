import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Bio from "../components/Organisms/bio"
import Layout from "../components/Organisms/layout"
import SEO from "../components/Organisms/seo"
import Article from "../components/Organisms/article"
const _Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BlogIndex = ({ data, location }: { data: any; location: Location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const noImage = data.file
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="すべての記事" />
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
              image={node.frontmatter.image.childImageSharp.fixed}
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
            image {
              childImageSharp {
                fixed(width: 320) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
