import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer style={{padding:'24px 0',borderTop:'1px solid #eee'}} className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <small>© {new Date().getFullYear()} News Explorer</small>
        <nav>
          <a href="#" target="_blank" rel="noreferrer">About</a>
        </nav>
      </div>
    </footer>
  )
}
