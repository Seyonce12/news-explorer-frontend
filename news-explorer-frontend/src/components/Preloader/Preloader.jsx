import React from 'react';
import './Preloader.css';

export default function Preloader(){ 
  return (
    <div className="preloader card" role="status" aria-live="polite" aria-label="Loading">
      <div className="preloader__spinner" />
      <div className="preloader__text">Searching for news...</div>
    </div>
  );
}
