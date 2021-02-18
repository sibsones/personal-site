import React from "react"
import './App.css'
import schedule from './images/freshers-schedule.png'

function Freshers(props) {
    return (
      <div class="project-select">
        <h1>Subcity Radio Freshers Schedule 2020</h1>
        <p>Schedule of an entire week of remote broadcasting inline with COVID guidelines.<br></br>Main websites schedule was unsuitable for advertising the sheer scope of 24*7 hours of community radio, so this was born</p>
        <a href="https://www.subcity.org/freshers2020">
        <img src={schedule} alt="Archive Image"></img>
        </a>
        <p>Technologies: Django</p>
      </div>
    )
  }

export default Freshers