import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'

export default function Header(){
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo"><Link to="/">csblog</Link></h1>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </header>
  )
}
