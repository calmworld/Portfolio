import React from 'react'

let skillList = [
	"Javascript",
	"Typescript",
	"React",
	"Node.js",
	"Python",
	"HTML5",
	"CSS",
	"Git",
	"Github",
	"PostgreSQL",
	"MongoDB",
	"CORS",
	"REST",
	"Postman",
	"AWS",
	"Express",
	"Axios",
	"Bootstrap",
	"Heroku",
];

export default function Skills() {
	return (
		<div>
			<h4 className='skill-title'>Skills</h4>
			<ul className='list'>
				<li>{skillList}</li>
			</ul>
		</div>
	);
}
