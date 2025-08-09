import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default function Header({ onOpenLogin, onOpenRegister }) {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Home">
          <div className="header__logo">NE</div>
          <div className="header__title-wrap">
            <div className="header__title">News Explorer</div>
            <div className="header__subtitle"></div>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/" className={({isActive}) => `header__link${isActive ? ' header__link--active' : ''}`}>Home</NavLink>
          <NavLink to="/saved-news" className={({isActive}) => `header__link${isActive ? ' header__link--active' : ''}`}>Saved</NavLink>
        </nav>

        <div className="header__actions">
          <button className="header__btn header__btn--ghost" onClick={onOpenLogin}>Sign in</button>
          <button className="header__btn" onClick={onOpenRegister}>Sign up</button>
        </div>
      </div>
    </header>
  );
}
