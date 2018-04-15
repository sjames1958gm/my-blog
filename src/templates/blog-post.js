import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Template = ({ data, location, pathContext }) => {
  const { markdownRemark: post } = data
  const { frontmatter, html } = post
  const { title } = frontmatter
  const { prev, next } = pathContext
  console.log(pathContext)

  return (
    <div>
      <Helmet title={`${title} - My Blog`} />

      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>{prev && <Link to={prev.path}>{prev.title}</Link>}</p>
        <p>{next && <Link to={next.path}>{next.title}</Link>}</p>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        tags
        excerpt
      }
    }
  }
`

export default Template
