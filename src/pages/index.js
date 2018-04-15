import React from 'react'
import Link from 'gatsby-link'
import { fromByteArray } from 'ipaddr.js'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({ node: post }) => {
        console.log(post)
        return (
          <div key={post.id}>
            <h2>
              <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
            </h2>
            <p>{post.frontmatter.excerpt}</p>
            <ul>
              {post.frontmatter.tags.map(tag => {
                return (
                  <li key={tag}>
                    <Link to={`/tags/${tag}`}>{tag}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
