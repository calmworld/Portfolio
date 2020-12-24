import React from 'react'

import About from './About'
import Header from './Header'
import Nav from './Nav'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'
import MyForm from './MyForm'

function Home(props) {
  let projects = [
    {
      name: "Connect4",
      description: "The classic connect4 game with a twist, No Gravity! See if you can win!",
      tech: "Javascript, CSS, HTML5, JQuery",
      link: "https://unruffled-archimedes-f20493.netlify.app/index.html",
      github: "https://github.com/calmworld/connect4.github.io",
      img: "../img/connect4.png",
      gif: ""
    },{
      name: "amazing",
      description: "E-commerce website",
      tech: "Express.js, Node.js, Mongoose, EJS, HTML, CSS, Materialize",
      link: "https://radiant-lowlands-77744.herokuapp.com/products",
      github: "https://github.com/calmworld/amazing.github.io",
      img: "../img/amazing.png",
      gif: ""
    },{
      name: "InstaClone",
      description: "Collaboration Project - A social media Instagram clone",
      tech: "MERN - MongoDB (Mongoose), Express.js, React, Node.js, Bootstrap",
      link: "https://stark-ocean-08311.herokuapp.com/",
      github: "https://github.com/cwhitney85/instaclone-client",
      img: "../img/instaclone.png",
      gif: ""
    },{
      name: "Pancea",
      description: "Have you been feeling under the weather? Would you like to know what your body is telling you? Pancea is a symptom checker app built using physician maintained medical API",
      quote: "“Really Useful App” - Ron Meyers, GA Instructor",
      tech: "Express, React, Mongoose, Bootstrap, Node.js",
      link: "https://pancea.herokuapp.com/",
      github: "https://github.com/calmworld/pancea-client",
      img: "../img/panceasite.png",
      gif: ""
    }, {
      name: "NerdStop",
      description: "Trivia Game with random categories for a fun trivia night",
      tech: "React, Materialize",
      link: "https://arcane-coast-24480.herokuapp.com/",
      github: "https://github.com/calmworld/nerdstop",
      img: "../img/nerdstop.png"
    }
  ]


  let skills = {
    skills: {
      languages: ["JavaScript", "Python"],
      structures:	["PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
      libraries: ["React", "Express", "Node", "Mongoose", "Flask"]
    },
    pics: ["../img/jslogo.png", "../img/logo-python.png", "../img/axios.png", "./logo512.png", "../img/logo-node.png", "../img/logo-express.png", "../img/logo-flask.png", "../img/logo-psql.png", "../img/logo-mongo.png", "../img/heroku.png"]
  }

  return (
    <div className="App">
      <header>
        <Header className="header" />
        <Nav />
      </header>
      <main>
        <div id="about">
            <About />
        </div>
        <div id="projects">
            <h1 className="fancy proj-title">Projects</h1>
            <Project project={projects[3]} />
            <Project project={projects[4]} />
            <Project project={projects[2]} />
            <Project project={projects[1]} />
            <Project project={projects[0]} />
        </div>

        <div id="skills">
            <Skills skills={skills} />
        </div>
      </main>
      <div id="contact">
        <h1 className="fancy proj-title contact">Contact</h1>
        <Contact />
      </div>
      <div id="myform">
        <h1 className="fancy proj-title contact"></h1>
        <MyForm />
      </div>
      <br />
      <footer>
        <p>Sarah's portfolio was constructed in React by Sarah Alhuriz, © 2020</p>
      </footer>
    </div>
  );
}

export default Home;

