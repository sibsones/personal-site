import React from "react"
import Thumbnail from "./Thumbnail"
import './App.css'
import schedule from './images/freshers-schedule.png'
import interactive from './images/interactive.png'
import archivepic from './images/archives.png'
import gemspic from './images/gemspic.png'
import stentpic from './images/stentpic.jpg'
import gif from './images/spin_subcity.gif'
import livecodepic from './images/xfadein.png'

function Projects(props) {
  return (
    <div class="project-desc">
      <h2>Projects</h2>
      <h3>Subcity Radio</h3>
      <p>Currently volunteering at Community Radio station <a href="https://www.subcity.org">Subcity Radio</a> <br></br>Full stack developer</p>
      <img class="spinner" src={gif} alt="subcity"></img>
        <Thumbnail
            link="/archive"
            image={archivepic}
            title="Subcity Radio Archive Website"
            category="Website (Ongoing Re-Design)" />

        <Thumbnail
            link="/freshers"
            image={schedule}
            title="Subcity Radio Freshers Schedule 2020"
            category="Website (Launched September 2020)" />

        <Thumbnail
            link="/interactive"
            image={interactive}
            title="Subcity Radio Interactive Display"
            category="Website (Launched September 2020)" />

        <h2>University Projects</h2>
        <h3>University of Glasgow</h3>
        <p>2021 Graduate - 2:1 Computing Science BSc</p>

        <Thumbnail
            link="/botnet"
            image=""
            title="Analysis & Behaviour of Mirai-like Botnets"
            category="Research (Honours Project) (Due: April 2nd)" />

        <Thumbnail
            link="/stent"
            image={stentpic}
            title="Smart Stent Graph"
            category="Mobile Application (Delivered March 2019)" />

        <Thumbnail
            link="/gems"
            image={gemspic}
            title="Glasgow Gems"
            category="Django Web Application (Delivered March 2018)" />

          <h2>Personal Projects</h2>

          <Thumbnail
            link="/livecode"
            image={livecodepic}
            title="xFadeIn"
            category="Livecoding (TIDAL + SUPERCOLLIDER)" />


    </div>
  )
}
 
export default Projects;