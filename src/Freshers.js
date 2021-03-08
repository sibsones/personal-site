import React from "react"
import './App.css'
import schedule from './images/freshers-schedule.png'

function Freshers(props) {
    return (
      <div class="project-select">
        <h1>Subcity Radio Freshers Schedule 2020</h1>
        <p>Schedule of an entire week of 24/7 remote broadcasting inline with COVID guidelines.<br></br>Current schedule displays one date at a time, we wanted to fully showcase the sheer scale of this week of broadcasting. Show descriptions fluidly pop out on hover, page is also mobile friendly :)</p>
        <a href="https://www.subcity.org/freshers2020">
        <img src={schedule} alt="Archive Image"></img>
        </a>
        <p>Technologies: Django</p>
      </div>
    )
  }

export default Freshers