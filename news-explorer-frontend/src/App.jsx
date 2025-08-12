import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import SavedNews from './routes/SavedNews'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader/Preloader'
import { fetchTopArticles } from './utils/api'

export default function App(){
  const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    let cancelled = false
    setLoading(true)
    fetchTopArticles().then(data => {
      if(!cancelled){
        setArticles(data)
        setLoading(false)
      }
    }).catch(err => {
      console.error(err)
      setLoading(false)
    })
    return ()=> { cancelled = true }
  },[])

  return (
    <div className="app">
      <Header />
      {loading ? <Preloader /> : (
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      )}
      <Footer />
    </div>
  )
}
