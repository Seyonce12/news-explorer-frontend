import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">News Explorer</div>
          <div className="footer__meta">© 2020 Supersite, Powered by News API</div>
        </div>
        <div className="footer__copy">© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
