import React from 'react'
import './NewsCard.css'

export default function NewsCard({article}){
  return (
    <article className="card">
      <img className="card__img" src={article.image} alt={article.title} />
      <div className="card__body">
        <h3 style={{margin:0}}>{article.title}</h3>
        <p style={{flex:1,color:'#555'}}>{article.description}</p>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <small>{article.source} • {article.date}</small>
          <button aria-label="save">Save</button>
        </div>
      </div>
    </article>
  )
}
