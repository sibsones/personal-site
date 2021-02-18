import React from "react"
import './App.css'
import archivepic from './images/archives.png'

function Archive(props) {
  return (
    <div class="project-select">
      <h1>Subcity Radio Archive</h1>
      <p>An interactive archival exhibition spanning 25 years.</p>
      <a href="https://www.subcity.org/archive">
      <img src={archivepic}></img>
      </a>
      <p>Technologies: Django, Google Cloud API (Image Hosting Bucket)</p>
    </div>
  )
}
 
export default Archive;