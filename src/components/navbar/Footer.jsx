import React from 'react'
import '../../styles/Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>About: A simple React + Vite practice site.</div>
        <div>© {new Date().getFullYear()} Example</div>
      </div>
    </footer>
  )
}
