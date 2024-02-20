import React from "react";

const description =
	"Innovative and adaptable bilingual Software Engineer with a healthcare background. Curious with highly-developed analytical skills and real passion for solving problems and implementing effective solutions, in a dynamic, highly technical environment. Proactive collaborator with outstanding verbal and written communication skills.";

interface AboutProps {
	description?: string;
}

export const About: React.FC<AboutProps> = () => {
	return (
		<div className="about-text">
			<h1 className="fancy">About</h1>
			<p>{description}</p>
		</div>
	);
};
