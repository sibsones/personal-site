import React from "react"
import profilepic from "./images/profilepic.jpg"
 
function Home(props) {
  return (
    <div class="home-desc">
      <h1>Home</h1>
      <p>This is a portfolio of my current & previous projects and my first dive into React</p>
      <p>Contact: luis.sibson@gmail.com</p>
      <br></br>
      <img class="profilepic" src={profilepic}></img>
    </div>
  )
}
 
export default Home;