import React from 'react'
import '../../styles/Footer.css'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>About</div><br />
        <div>A computer science related blog site for students to share their thoughts and experiences.</div>
        <div>© {new Date().getFullYear()} CSBLOG</div>
      </div>
    </footer>
  )
}
