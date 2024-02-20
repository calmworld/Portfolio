import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Skills from "./Skills";
import Contact from "./Contact";
import { About } from "./About";
import { Project } from ".";
import { stubProjects } from "../stubs";
import Footer from "./Footer";

export const Home: React.FC = () => {
	return (
		<div className="App">
			<header>
				<Header />
				<Nav />
			</header>
			<main>
				<div id="about">
					<About />
				</div>
				<div id="projects">
					<h1 className="fancy proj-title">Projects</h1>
					{stubProjects.map((project) => (
						<Project key={project.name} {...project} />
					))}
				</div>

				<div id="skills">
					<Skills />
				</div>
			</main>
			<div id="contact">
				<h1 className="fancy proj-title contact">Contact</h1>
				<Contact />
			</div>
			<br />
			<Footer />
		</div>
	);
};
