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
      description: "A two player connect4 game with a twist, No Gravity! See if you can win!",
      tech: "JavaScript, CSS, HTML5, JQuery",
      link: "https://unruffled-archimedes-f20493.netlify.app/index.html",
      github: "https://github.com/calmworld/connect4.github.io",
      img: "../img/connect4.png",
      gif: ""
    },{
      name: "amazing",
      description: "E-commerce website",
      tech: "RESTful API, JavaScript, EJS, BCrypt, Express, Node, HTML/CSS, MongoDB, Materialize",
      link: "https://radiant-lowlands-77744.herokuapp.com/products",
      github: "https://github.com/calmworld/amazing.github.io",
      img: "../img/amazing.png",
      gif: ""
    },{
      name: "InstaClone",
      description: "Collaboration Project - A social media Instagram clone",
      tech: "MERN stack (MongoDB, Express, React, Node), AuthO, HTML/CSS, Bootstrap",
      link: "https://stark-ocean-08311.herokuapp.com/",
      github: "https://github.com/cwhitney85/instaclone-client",
      img: "../img/instaclone.png",
      gif: ""
    },{
      name: "Pancea",
      description: "Have you been feeling under the weather? Would you like to know what your body is telling you? Pancea is a symptom checker app built using physician maintained medical API",
      tech: "JavaScript, MERN stack (MongoDB, Express, React, Node), AWS, HTML/CSS, Bootstrap, Infermedica API",
      link: "https://main.dfzzr93qmqe2b.amplifyapp.com/",
      github: "https://github.com/calmworld/pancea-client",
      img: "../img/panceasite.png",
      gif: ""
    },{
      name: "Notes",
      description: "A full-stack note app where users can create, view and delete notes. As well as image uploading, fetching, and rendering",
      tech: "JavaScript, React, AWS Amplify, AWS User Auth, Amazon S3 Storage, GraphQL API",
      link: "https://main.d1e9t6b1l344ne.amplifyapp.com/",
      github: "https://github.com/calmworld/amplifyapp",
      img: "../img/notesAWS.png",
      gif: ""
    },{
      name: "NerdStop",
      description: "Trivia Game with random categories for a fun trivia night",
      tech: "JavaScript, React, AWS, Materialize, Trivia API",
      link: "https://main.d1yvs5ruv6qdon.amplifyapp.com/",
      github: "https://github.com/calmworld/nerdstop",
      img: "../img/nerdstop.png"
    }
  ]


  let skills = {
    pics: ["../img/jslogo.png", "./logo512.png", "../img/logo-python.png", "../img/node.png", "../img/rest.png", "../img/graphql.png", "../img/aws.png", "../img/github.png", "../img/postgresql.png", "../img/mongo.png", "../img/api.png", "../img/sql.png", "../img/express.png", "../img/git.png", "../img/socket.png", "../img/json.png", "../img/html5.png", "../img/axios.png", "../img/heroku.png", "../img/bootstrap.png", "../img/css3.png", "../img/postman.png", "../img/flask.png", "../img/redux.png", "../img/websocket.png"]
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
        <p>Built in React by Sarah Alhuriz, © 2020</p>
      </footer>
    </div>
  );
}

export default Home;

