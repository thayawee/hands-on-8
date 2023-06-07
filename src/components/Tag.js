import React from 'react'

const Tag = (props) => {
  const { tag } = props

  return (
    <div>
      <a>#{tag}</a>
    </div>
  )
}

export default Tag
