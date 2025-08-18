import React from "react";
import "./NewsCard.css";
import bookmarkIcon from "../../assets/bookmark.svg";
import trashIcon from "../../assets/trash.svg";
import defaultImage from "../../assets/images/article1.webp";

/**
 * NewsCard (asset-icon variant)
 * - Uses <img> icons (bookmark/trash) from src/assets
 * - Keeps markup & classes compatible with the existing project
 *
 * Props:
 *  - article: object (urlToImage, title, description, publishedAt, source, keyword, _id, url)
 *  - saved: bool  -> when true the card shows the "trash" icon and calls onRemove
 *  - onRemove: fn -> called with id/url when removing a saved article
 *  - onSave: fn   -> called with article when saving from the main page
 */

export default function NewsCard({ article = {}, saved = false, onRemove, onSave }) {
  const {
    urlToImage = "",
    title = "Untitled",
    description = "",
    publishedAt = "",
    source = {},
    keyword,
    _id,
    url,
  } = article || {};

  const idOrUrl = _id || url || Math.random().toString(36).slice(2);

  const handleActionClick = (e) => {
    e.preventDefault();
    if (saved) {
      onRemove && onRemove(idOrUrl);
    } else {
      onSave && onSave(article);
    }
  };

  const iconSrc = saved ? trashIcon : bookmarkIcon;
  const iconAlt = saved ? "Remove from saved" : "Save article";
  const imgSrc = urlToImage || defaultImage;

  return (
    <article className="news-card" aria-labelledby={`title-${idOrUrl}`}>
      <div className="news-card__image-wrapper">
        <img
          className="news-card__image"
          src={imgSrc}
          alt={title}
          loading="lazy"
        />

        {/* keyword/tag - white rounded rectangle to ensure visibility */}
        <div className="news-card__tag" aria-hidden="true">
          <span className="news-card__tag-text">
            {keyword || (source && source.name) || "Saved"}
          </span>
        </div>

        {/* action (bookmark / trash) - positioned on top-right */}
        <div className="news-card__action-wrapper">
          <button
            type="button"
            className={`news-card__action ${saved ? "news-card__action--saved" : ""}`}
            onClick={handleActionClick}
            aria-label={iconAlt}
            title={iconAlt}
          >
            <img src={iconSrc} alt={iconAlt} width="18" height="18" />
          </button>
        </div>
      </div>

      <div className="news-card__content">
        <h3 id={`title-${idOrUrl}`} className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <div className="news-card__meta">
          {publishedAt && (<time className="news-card__date">{publishedAt}</time>)}
          {source && source.name && <span className="news-card__source">{source.name}</span>}
        </div>
      </div>
    </article>
  );
}
