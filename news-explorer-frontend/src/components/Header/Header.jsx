import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){
  return (
    <header className="header container">
      <div className="header__logo">
        <Link to="/"><img src="/assets/images/Main_Not_Logged_In/about-author/comment/avatar/image-03/comment/avatar/avatar.png" alt="logo" style={{height:48}}/></Link>
        <div>
          <Link to="/" style={{textDecoration:'none',color:'inherit'}}><h2>News Explorer</h2></Link>
          <small>Find and save articles</small>
        </div>
      </div>
      <nav className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/saved-news">Saved</Link>
      </nav>
    </header>
  )
}
