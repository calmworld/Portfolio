import React from "react";

export interface ProjectDetailsProps {
	name: string;
	description: string;
	tech: string;
	link?: string;
	github: string;
	img?: string;
}

export const Project: React.FC<ProjectDetailsProps> = ({
	name,
	description,
	tech,
	link,
	github,
	img,
}) => {
	return (
		<div className="section">
			<img src={img} alt={`Project - ${name}`} />
			<div className="proj-text">
				<h2 className="fancy">{name}</h2>
				<p>{description}</p>
				<p>
					<strong>Tech: </strong>
					<span className="tech">{tech}</span>
				</p>
				<div className="proj-links">
					{link && (
						<a href={link} target="_blank" rel="noopener noreferrer">
							View {name} live
						</a>
					)}
					<a href={github} target="_blank" rel="noopener noreferrer">
						Project GitHub
					</a>
				</div>
			</div>
		</div>
	);
};
