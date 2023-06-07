import React from 'react'
import Classes from './Blog.module.css'
import Tag from './Tag'

const Blog = (props) => {
  const { blog } = props
  return (
    <div className={Classes.card}>
      <div>
        <p>{blog.author}</p>
        <p>{blog.date}</p>
        <p>{blog.readingTime}</p>
      </div>
      <a href={blog.url}>{blog.header}</a>
      <p>{blog.discription}</p>
      <div>
        {blog.tags.map((tag, index) => {
          return <Tag key={index} tag={tag} />
        })}
      </div>
    </div>
  )
}

export default Blog
