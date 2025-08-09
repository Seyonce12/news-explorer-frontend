import React, { useState } from 'react';
import './SearchForm.css';

export default function SearchForm({ onSearch }) {
  const [value, setValue] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <section className="search" aria-labelledby="search-heading">
      <div className="container">
        <form className="search__form card" onSubmit={onSubmit}>
          <input id="search-input" type="search" className="search__input" placeholder="Enter topic, e.g. nature" value={value} onChange={(e)=>setValue(e.target.value)} aria-label="Search for news" required />
          <button className="btn search__btn" type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}
