import React from 'react'
import { findBlockContaining } from '../../utils/figmaHelpers'

const authorBlock = findBlockContaining('This block describes the project author') || findBlockContaining('This block describes the project author. Here you should') || 'This block describes the project author. Here you should indicate your name, a short description about you and contact details.'

export default function About(){
  return (
    <section className="container">
      <h2>About the author</h2>
      <p>{authorBlock}</p>
    </section>
  )
}
