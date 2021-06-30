import React from "react"
import './App.css'
// import botnetpic from './images/archives.png'

function Botnet(props) {
  return (
    <div class="project-select">
      <h1>A Projection Model for IoT Botnet Activity</h1>
      <p>Presenting a novel network traffic projection model using Categorical Encoding for LSTM Neural Network Models. Due to network packet traffics self similarity and highly non-linear nature, LSTM models can be effectively trained on Categorical datasets encompassing frequent behaviour. The project outlines the current IoT threat presented by the Mirai botnet and its many successors, and proposes a new encoding model for projection future botnet behaviour. </p>
      <p>The project can be read upon request :)</p>
      <a href=""></a>
      <a href="">
      <img src=""></img>
      </a>
      <p>Technologies: Python (Jupyter Notebook), MongoDB</p>
    </div>
  )
}
 
export default Botnet;