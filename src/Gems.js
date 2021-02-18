import React from "react"
import './App.css'
import gemspic from './images/gemspic.png'

function Gems(props) {
  return (
    <div class="project-select">
      <h1>Glasgow Gems</h1>
      <p>Second Year Group Project: Django Web Application, social network sharing architecture around Glasgow</p>
      <a href="https://github.com/sibsones/glasgowgems">
      <img src={gemspic}></img>
      </a>
      <p>Technologies: Django, sqlite3</p>
    </div>
  )
}
 
export default Gems;