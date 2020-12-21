import React from 'react'
import { HashRouter as Router, Route } from "react-router-dom"
import ParticleComp from './components/ParticleComp'

import './App.css'
import Home from './components/Home'



function App() {
  return (
    <Router>
      <div className="container"
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
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Route exact path='/' component={Home} />     
        </div>
      </div>
    </Router>
  )
}

export default App
