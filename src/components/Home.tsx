import React from 'react'
import Header from "./Header";
import Nav from "./Nav";
import Skills from "./Skills";
import Contact from "./Contact";
import { About } from "./About";
import { Project } from '.';

interface Project {
  name: string;
  description: string;
  tech: string;
  link: string;
  github: string;
  img: string;
  gif?: string;
}

const projects = [
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

export default function Home() {
	return (
	  <div className='App'>
		<header>
		  <Header />
		  <Nav />
		</header>
		<main>
		  <div id='about'>
        <About />
      </div>
		  <div id='projects'>
			<h1 className='fancy proj-title'>Projects</h1>
			<Project project={projects[3]} />
			<Project project={projects[4]} />
			<Project project={projects[5]} />
			<Project project={projects[0]} />
		  </div>
  
		  <div id='skills'>
			<Skills />
		  </div>
		</main>
		<div id='contact'>
		  <h1 className='fancy proj-title contact'>Contact</h1>
		  <Contact />
		</div>
		<br />
		<footer>
		  <p>Built in React by Sarah Alhuriz, © 2024</p>
		</footer>
	  </div>
	);
};
