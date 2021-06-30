import React from "react"
import './App.css'
import livecodepic from './images/xfadein.png'

function Archive(props) {
  return (
    <div class="project-select">
      <h1>xFadeIn</h1>
      <p>Livecoding with TidalCycles and SUPERCOLLIDER.</p>
      <a href="https://www.subcity.org/shows/xfadein">
      <img src={livecodepic}></img></a>
      <p>This is a personal project, using live coding to generate audio</p>
      <p>Technologies: TidayCycles SUPERCOLLIDER</p>
    </div>
  )
}
 
export default Archive;