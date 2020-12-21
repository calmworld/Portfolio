import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ParticleComp from './components/ParticleComp'

import Home from './components/Home'
import Projects from './components/Projects'
import MyForm from './components/MyForm'


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
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Home />
          <Projects />
          <MyForm />        
        </div>
      </div>
    </Router>
  )
}

export default App
