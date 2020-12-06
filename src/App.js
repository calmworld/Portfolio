import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ParticleComp from './components/ParticleComp'

import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <ParticleComp />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Nav />
          <Switch>
            <Route path="/"><Home /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/contact"><Contact /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
