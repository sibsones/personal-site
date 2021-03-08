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
      <p>This archive showcases 25 years of Subcity's history, team members can upload new entries through Django forms, hosting multiple filetypes, descriptions and tags. Currently ongoing redesign, as a collaboration between Web, Archives and Design teams.</p>
      <p>Technologies: Django, Google Cloud API</p>
    </div>
  )
}
 
export default Archive;