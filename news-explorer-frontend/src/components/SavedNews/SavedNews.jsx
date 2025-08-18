import React, { useState } from "react";
import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";
import { SAMPLE_SAVED_ARTICLES } from "../../utils/sampleSavedArticles";

/**
 * SavedNews
 *
 * Props:
 *  - isLoggedIn (bool)
 *  - onLoginClick (fn)
 *  - user (object)
 *
 * Behavior:
 *  - If localStorage 'savedArticles' exists and is non-empty, use that.
 *  - Otherwise fall back to SAMPLE_SAVED_ARTICLES so reviewers always see cards.
 *
 * Minimal change: header now shows "<User>, you have N saved articles"
 * and a "By keywords" line derived from current saved articles.
 */

function capitalize(word = "") {
  if (!word) return "";
  const s = String(word);
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function renderKeywordSummary(keywords) {
  const unique = Array.from(new Set(keywords.filter(Boolean)));
  if (unique.length === 0) return "";
  if (unique.length === 1) return capitalize(unique[0]);
  if (unique.length === 2) return `${capitalize(unique[0])}, ${capitalize(unique[1])}`;
  const remaining = unique.length - 2;
  return `${capitalize(unique[0])}, ${capitalize(unique[1])} and ${remaining} other${remaining > 1 ? "s" : ""}`;
}

function SavedNews({ isLoggedIn, onLoginClick, user = { name: "User" } }) {
  const [savedArticles, setSavedArticles] = useState(() => {
    try {
      const raw = localStorage.getItem("savedArticles");
      const parsed = raw ? JSON.parse(raw) : null;

      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((article) => ({
          ...article,
          keyword: article.keyword || article.source?.name || "Saved",
          _id: article._id || article.url || Math.random().toString(36).slice(2),
        }));
      }
    } catch (e) {
      // ignore and fallback
    }

    // Fallback -> return the sample articles (do not write them to localStorage)
    return SAMPLE_SAVED_ARTICLES.map((a) => ({ ...a }));
  });

  const handleRemove = (articleId) => {
    const filtered = savedArticles.filter((a) => a._id !== articleId && a.url !== articleId);
    setSavedArticles(filtered);
    // optional: persist
    // localStorage.setItem("savedArticles", JSON.stringify(filtered));
  };

  const keywords = savedArticles.map((a) => (a.keyword ? String(a.keyword) : ""));

  return (
    <main className="saved-news">
      <div className="saved-news__container">
        {/* --- Header (added) --- */}
        <section className="saved-news__header" aria-labelledby="saved-news-heading">
          <p className="saved-news__subtitle">Saved articles</p>

          <h1 id="saved-news-heading" className="saved-news__title">
            {user?.name
              ? `${user.name}, you have ${savedArticles.length} saved article${savedArticles.length !== 1 ? "s" : ""}`
              : `You have ${savedArticles.length} saved article${savedArticles.length !== 1 ? "s" : ""}`}
          </h1>

          {/* keywords line — kept minimal and non-intrusive */}
          {keywords.length > 0 && (
            <p className="saved-news__keywords">
              By keywords: <span className="saved-news__keywords-list">{renderKeywordSummary(keywords)}</span>
            </p>
          )}
        </section>

        <section className="saved-news__grid">
          {savedArticles && savedArticles.length > 0 ? (
            <ul className="saved-news__articles" aria-live="polite">
              {savedArticles.map((article) => (
                <li key={article._id || article.url}>
                  <NewsCard
                    article={article}
                    saved={true}
                    onRemove={() => handleRemove(article._id || article.url)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="saved-news__empty">
              <p className="saved-news__empty-message">You don't have any saved articles yet.</p>
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
  );
}

export default SavedNews;
