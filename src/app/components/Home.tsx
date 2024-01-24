import React from 'react'
import Header from "./Header";
import Nav from "./Nav";
import Skills from "./Skills";
import Contact from "./Contact";
import { About } from "./About";
import { Project } from '.';
import { stubProjects } from '../stubs';

export const Home: React.FC = () => {
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
			<Project project={stubProjects[3]} />
			<Project project={stubProjects[4]} />
			<Project project={stubProjects[5]} />
			<Project project={stubProjects[0]} />
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
