import React from "react"
import './App.css'
import stentpic from './images/stentpic.jpg'

function Stent(props) {
  return (
    <div class="project-select">
      <h1>Smart Stent Graph</h1>
      <p>Third Year Group Project: Developing an Android App to display data from stents into readable formats for health professionals. The data displayed here is test/dummy data.</p>
      <a href="">
      <img src={stentpic}></img>
      </a>
      <p>Technologies: Android SDK, Python, MySQL</p>
    </div>
  )
}
 
export default Stent;