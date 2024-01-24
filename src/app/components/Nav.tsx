import React from 'react'
import { Slide } from "@mui/material";

export default function Nav() {
	return (
		<Slide
			direction='up'
			in={true}
			timeout={{ enter: 2000 }}
		>
			<nav>
				<ul className='sticky'>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#skills'>Skills</a>
					</li>
					<li>
						<a href='#contact'>Contact & Resume</a>
					</li>
				</ul>
			</nav>
		</Slide>
	);
}