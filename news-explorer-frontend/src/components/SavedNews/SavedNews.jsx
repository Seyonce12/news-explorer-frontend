// src/components/SavedNews/SavedNews.jsx
import React, { useState, useEffect } from "react";
import { useAuth } from '../../auth/AuthProvider';
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ onLoginClick }) {
  const { user, isAuthenticated } = useAuth();
  const [saved, setSaved] = useState([]);

  // Load saved articles for the current user from localStorage (simple stub)
  useEffect(() => {
    if (isAuthenticated && user) {
      const key = `saved_${user.name || 'guest'}`;
      const raw = localStorage.getItem(key);
      setSaved(raw ? JSON.parse(raw) : []);
    } else {
      setSaved([]);
    }
  }, [isAuthenticated, user]);

  const openLogin = (e) => {
    if (e) e.preventDefault();
    if (typeof onLoginClick === "function") return onLoginClick();
    // fallback: you may wire a global login flow here
  };

  if (!isAuthenticated) {
    return (
      <section className="saved-news">
        <div className="saved-news__empty">
          <h2 className="saved-news__title">Saved articles</h2>
          <p className="saved-news__text">Please sign in to view your saved articles.</p>
          <button
            type="button"
            className="saved-news__signin-link"
            onClick={openLogin}
          >
            Sign in
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="saved-news">
      <h2 className="saved-news__title">Saved articles</h2>

      {saved.length === 0 ? (
        <div className="saved-news__empty">
          <p className="saved-news__empty-message">
            You don't have any saved articles yet.
          </p>
        </div>
      ) : (
        <div className="saved-news__list">
          {saved.map((article, idx) => (
            <NewsCard key={article.url || idx} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}

export default SavedNews;
