import React from "react";
import {
	InboxIcon,
	MailIcon,
	PersonIcon,
	MarkGithubIcon,
} from "@primer/octicons-react";

export default function Contact() {
	return (
		<nav>
			<ul>
				<li data-alt="email">
					<MailIcon />
					<div className="spacer" />
					sarah.alhuriz@hotmail.com
				</li>
				<li>
					<PersonIcon />
					<div className="spacer" />
					<a
						href="https://www.linkedin.com/in/sarah-alhuriz/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li data-alt="github">
					<MarkGithubIcon />
					<div className="spacer" />
					GitHub: <div className="spacer" />
					<a
						href="https://github.com/calmworld"
						target="_blank"
						rel="noopener noreferrer"
					>
						calmworld
					</a>
				</li>
				<li>
					<InboxIcon />
					<div className="spacer" />
					<a
						href="https://drive.google.com/file/d/1x1kVGT6Azl56ZYGsNGhdEmbXUWQDS2nX/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}
