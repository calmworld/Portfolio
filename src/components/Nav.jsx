
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <ul className="list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/myform">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}



