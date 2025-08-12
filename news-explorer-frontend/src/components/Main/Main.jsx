import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import './Main.css'

export default function Main({articles}){
  if(!articles || articles.length===0){
    return <section className="container"><p>No results</p></section>
  }
  return (
    <section className="container">
      <div className="news-grid">
        {articles.map(a => <NewsCard key={a.id} article={a} />)}
      </div>
    </section>
  )
}
