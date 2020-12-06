import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/"><Home /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
