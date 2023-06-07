import React from 'react'
import Classes from './Footer.module.css'
const Footer = () => {
  return (
    <div className={Classes.footer}>
      <a className="font-bold text-base" href="https://www.google.co.th/">
        About Us
      </a>
      <a className="font-bold text-base" href="https://www.google.co.th/">
        Blog
      </a>
      <a className="font-bold text-base" href="https://www.google.co.th/">
        Career
      </a>
      <a className="font-bold text-base" href="https://www.google.co.th/">
        Contact Us
      </a>
    </div>
  )
}

export default Footer
