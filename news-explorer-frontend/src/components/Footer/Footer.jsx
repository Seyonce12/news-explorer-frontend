import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">News Explorer</div>
          <div className="footer__meta">Built for Stage 1 — Figma tokens applied</div>
        </div>
        <div className="footer__copy">© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}
