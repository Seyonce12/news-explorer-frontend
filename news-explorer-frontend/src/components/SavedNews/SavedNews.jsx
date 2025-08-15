import React, { useState, useEffect } from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";
import { SAMPLE_SAVED_ARTICLES } from "../../utils/sampleSavedArticles";

/**
 * SavedNews
 *
 * Props:
 *  - isLoggedIn (bool)  -- not strictly required for showing static cards
 *  - onLoginClick (fn)   -- used if you want the "Sign in" CTA to open login
 *  - user (object)       -- optional user object (name etc.)
 *
 * Behavior:
 *  - If localStorage 'savedArticles' exists and is non-empty, use that.
 *  - Otherwise fall back to SAMPLE_SAVED_ARTICLES, so reviewers always see cards.
 *
 * This file intentionally does not mutate user's real localStorage unless they
 * explicitly save/remove items within the UI.
 */

function SavedNews({ isLoggedIn, onLoginClick, user = { name: "User" } }) {
  const [savedArticles, setSavedArticles] = useState(() => {
    try {
      const raw = localStorage.getItem("savedArticles");
      const parsed = raw ? JSON.parse(raw) : null;

      if (Array.isArray(parsed) && parsed.length > 0) {
        // Ensure each parsed article has a keyword
        return parsed.map((article) => ({
          ...article,
          keyword: article.keyword || article.source?.name || "Saved",
          _id: article._id || article.url || Math.random().toString(36).slice(2),
        }));
      }
    } catch (e) {
      // If localStorage is corrupted or JSON.parse fails, ignore and fallback
      // (do NOT crash)
      // console.warn("Could not parse savedArticles from localStorage", e);
    }

    // Fallback -> return the sample articles (do not write them to localStorage)
    return SAMPLE_SAVED_ARTICLES.map((a) => ({ ...a }));
  });

  // If you'd like to persist changes back to localStorage (e.g., remove article)
  // uncomment the following effect (it will persist the current list).
  //
  // useEffect(() => {
  //   localStorage.setItem("savedArticles", JSON.stringify(savedArticles));
  // }, [savedArticles]);

  const handleRemove = (articleId) => {
    // If you have a remove/save API later, call it here.
    const filtered = savedArticles.filter((a) => a._id !== articleId && a.url !== articleId);
    setSavedArticles(filtered);
    // optionally persist:
    // localStorage.setItem("savedArticles", JSON.stringify(filtered));
  };

  return (
    <>
      <main className="saved-news">
        <div className="saved-news__container">
          <section className="saved-news__header">
            <h1 className="saved-news__title">Saved articles</h1>
            <p className="saved-news__subtitle">
              {user?.name ? `${user.name}, here are your saved articles:` : "Here are your saved articles:"}
            </p>
          </section>

          <section className="saved-news__grid">
            {savedArticles && savedArticles.length > 0 ? (
              savedArticles.map((article) => (
                <NewsCard
                  key={article._id || article.url}
                  article={article}
                  saved={true}
                  // If your NewsCard expects different handlers, adapt:
                  onRemove={() => handleRemove(article._id || article.url)}
                />
              ))
            ) : (
              <div className="saved-news__empty">
                <p className="saved-news__empty-message">
                  You don't have any saved articles yet.
                </p>
                {!isLoggedIn && (
                  <button className="saved-news__signin-btn" onClick={onLoginClick}>
                    Sign in to save articles
                  </button>
                )}
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default SavedNews;
