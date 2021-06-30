import React from "react"
import profilepic from "./images/profilepic.jpg"
 
function Home(props) {
  return (
    <div class="home-content">
      <div class="home-desc">
        <img class="profilepic" src={profilepic}></img>
      </div>
        <div class="about">
          <p>This is a portfolio of my current & previous projects and my first dive into React! <br></br> I'm a 2021 graduate in Computing Science with particular interests in client focussed Web and Mobile development.</p>
          <a href = "mailto: luis.sibson@gmail.com">Contact</a>
          <br></br>
          <p>
            Preferred Technologies:
          </p>
          <ul>
            <li>Python</li>
            <li>HTML | CSS | JS</li>
            <li>Django | React</li>
            <li>Linux | Git</li>
            <li>Java | Rust | Haskell</li>
            <li>MySQL | MongoDB</li>
          </ul>
      </div>
    </div>
  )
}
 
export default Home;