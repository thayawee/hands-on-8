import React from 'react'
import Classes from './Blog.module.css'
import Tag from './Tag'

const Blog = (props) => {
  const { blog } = props
  return (
    <div className={Classes.blog}>
      <div className={Classes.author}>
        <p className="text-xs font-bold text-red-700">{blog.author}</p>
        <p className="text-xs text-gray-500">{blog.date}</p>
        <p className="text-xs text-gray-500">{blog.readingTime}</p>
      </div>
      <a className="font-bold text-xl" href={blog.url}>
        {blog.header}
      </a>
      <p className="text-xs font-bold text-gray-500">{blog.description}</p>
      <div className={Classes.tag}>
        {blog.tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />
        })}
      </div>
    </div>
  )
}

export default Blog
