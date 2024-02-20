import React from "react";
import { skillList } from "../stubs/stubSkills";

export default function Skills() {
	return (
		<div>
			<h4 className="skill-title">Skills</h4>
			<ul className="skill-list">
				{skillList.map((skill) => (
					<li key={skill} className="skill-item">
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}
