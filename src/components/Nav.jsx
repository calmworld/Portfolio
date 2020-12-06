
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul className="right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}



