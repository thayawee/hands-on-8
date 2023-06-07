import React from 'react'
import Classes from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={Classes.card}>
      <p>CLEVERSE</p>
      <div>
        <a href="https://www.google.co.th/">About Us</a>
        <a href="https://www.google.co.th/">Blog</a>
        <a href="https://www.google.co.th/">Career</a>
        <a href="https://www.google.co.th/">Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
