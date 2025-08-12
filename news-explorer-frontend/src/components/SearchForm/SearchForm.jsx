import React from 'react'
import './SearchForm.css'
import { findBlockContaining } from '../../utils/figmaHelpers'

const placeholderFromFigma = findBlockContaining('Введите в поиске') || findBlockContaining('Search for') || 'Search for news, e.g. technology, design'

export default function SearchForm(){
  return (
    <div className="searchform container" style={{paddingTop:20}}>
      <div className="search-field" role="search">
        <input type="search" placeholder={placeholderFromFigma} aria-label="Search" />
      </div>
      <button className="search-button" aria-label="Search">{findBlockContaining('Search') || 'Search'}</button>
    </div>
  )
}
