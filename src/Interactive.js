import React from "react"
import './App.css'
import interactive from './images/interactive.png'

function Interactive(props) {
  return (
    <div class="project-select">
      <h1>Subcity Radio Interactive Piece</h1>
      <p>A shared, live interactive audio experience, adapted from <a href="https://github.com/lil-data/algo">Lil Data</a></p>
      <a href="https://www.subcity.org/interactive">
      <img src={interactive}></img>
      </a>
      <p>Technologies: HTML/CSS/JS</p>
    </div>
  )
}
 
export default Interactive;