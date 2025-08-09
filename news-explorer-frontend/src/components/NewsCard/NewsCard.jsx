import React, { useEffect, useState } from 'react';
import { SAVED_KEY } from '../../utils/constants';
import './NewsCard.css';

export default function NewsCard({ article }) {
  const { id, title, description, source, date, image, url } = article;
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
      setIsSaved(saved.some(a => a.id === id));
    } catch {
      setIsSaved(false);
    }
  }, [id]);

  function toggleSave(e) {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
    if (isSaved) {
      const next = list.filter(a => a.id !== id);
      localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      setIsSaved(false);
    } else {
      localStorage.setItem(SAVED_KEY, JSON.stringify([...list, article]));
      setIsSaved(true);
    }
  }

  return (
    <article className="news-card card" aria-labelledby={`news-${id}`}>
      <a className="news-card__image-link" href={url} target="_blank" rel="noopener noreferrer">
        <img className="news-card__image" src={image} alt={title} loading="lazy" />
      </a>
      <div className="news-card__body">
        <div className="news-card__meta">
          <span className="news-card__source">{source}</span>
          <time className="news-card__date" dateTime={date}>{date}</time>
        </div>
        <h3 id={`news-${id}`} className="news-card__title">{title}</h3>
        <p className="news-card__desc">{description}</p>
        <div className="news-card__actions">
          <button className={`news-card__save ${isSaved ? 'news-card__save--saved' : ''}`} onClick={toggleSave}>
            {isSaved ? 'Saved' : 'Save'}
          </button>
          <a className="news-card__read" href={url} target="_blank" rel="noopener noreferrer">Read</a>
        </div>
      </div>
    </article>
  );
}
