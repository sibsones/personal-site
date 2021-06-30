import profilepic from './images/profilepic.jpg';
import './App.css';
import React,{Component} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Home from './Home.js'
import Archive from "./Archive"
import Freshers from './Freshers'
import Interactive from './Interactive'
import Stent from './Stent'
import Gems from './Gems'
import Botnet from './Botnet'
import Livecode from './Livecode'


function App() {  
  return (
    <BrowserRouter>
      <div className="App">
        <h1 class="title">Luis Sibson</h1>
        <Route exact path ="/" component={Home} />
        <Route path ="/personal-site" component={Projects} />
        <Route path = "/archive" component={Archive}/>
        <Route path = "/freshers" component={Freshers}/>
        <Route path = "/interactive" component={Interactive}/>
        <Route path = "/botnet" component={Botnet}/>
        <Route path = "/gems" component={Gems}/>
        <Route path = "/stent" component={Stent}/>
        <Route path = "/livecode" component={Livecode}/>

        <div className="nav">
          <div className="nav-items">
            <Link to="/" class="middle">Home</Link>
            <Link to="/personal-site" class="middle">Portfolio</Link>

          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
