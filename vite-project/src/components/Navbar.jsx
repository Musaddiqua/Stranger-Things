import React from 'react'
import './Navbar.css'

const Navbar = ({ onNavigate }) => {
  const go = (section) => (e) => {
    e.preventDefault()
    if (onNavigate) onNavigate(section)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={go('home')}>
        STRANGER THINGS
      </div>

      <ul className="nav-links">
        <li onClick={go('home')}>Home</li>
        <li onClick={go('characters')}>Characters</li>
        <li>Episodes</li>
        <li>Upside Down</li>
      </ul>
    </nav>
  )
}

export default Navbar
