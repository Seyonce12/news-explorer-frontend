import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import Main from '../components/Main/Main'

export default function Home({articles}){
  return (
    <main className="container">
      <SearchForm />
      <Main articles={articles} />
    </main>
  )
}
