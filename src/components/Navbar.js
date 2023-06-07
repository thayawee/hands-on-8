import React from 'react'
import Classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={Classes.navbar}>
      <img
        className={Classes.logo}
        src="https://p-u.popcdn.net/attachments/images/000/012/271/large/logo_cleverse.png?1538033995"
        alt="logo-cleverse"
      />
      <div className={Classes.link}>
        <a className="font-bold text-sm" href="https://www.google.co.th/">
          About Us
        </a>
        <a className="font-bold text-sm" href="https://www.google.co.th/">
          Blog
        </a>
        <a className="font-bold text-sm" href="https://www.google.co.th/">
          Career
        </a>
        <a className="font-bold text-sm" href="https://www.google.co.th/">
          Contact Us
        </a>
        <img
          className={Classes.moon}
          src="https://cdn.iconscout.com/icon/free/png-256/free-half-moon-1767806-1502386.png"
          alt="moon"
        />
      </div>
    </div>
  )
}

export default Navbar
