import React from 'react'
import Classes from './Tag.module.css'

const Tag = (props) => {
  const { tag } = props

  return (
    <div className={Classes.tag}>
      <a className="text-sm font-bold text-gray-500">#{tag}</a>
    </div>
  )
}

export default Tag
