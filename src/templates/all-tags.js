import React from 'react'
import Link from 'gatsby-link'

const allTags = ({ pathContext }) => {
  const { tags } = pathContext

  if (tags) {
    return (
      <div>
        <ul>
          {tags.map(tag => {
            return (
              <li key={tag}>
                <Link to={`/tags/${tag}`}>{tag}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default allTags
