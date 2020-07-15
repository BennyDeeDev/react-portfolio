import React from "react";
import skillsMock from "../mocks/skillsMock";
import Skill from "../components/Skill";
import skill from "../images/skills.svg";

export default function Skills() {
	return (
		<div>
			<div className="flex justify-center mt-16 mb-4 items-center">
				<img className="w-8" src={skill} alt="skills" />
				<h1 className="text-center">Meine Fähigkeiten</h1>
			</div>
			<div>
				<h2>Frontend</h2>
				{skillsMock.frontend.map((skill, index) => (
					<Skill
						key={index}
						text={skill.text}
						svg={skill.svg}
						progress={skill.progress}
					/>
				))}
				<h2>Backend</h2>
				{skillsMock.backend.map((skill, index) => (
					<Skill
						key={index}
						text={skill.text}
						svg={skill.svg}
						progress={skill.progress}
					/>
				))}
				<h2>General</h2>
				{skillsMock.general.map((skill, index) => (
					<Skill
						key={index}
						text={skill.text}
						svg={skill.svg}
						progress={skill.progress}
					/>
				))}
			</div>
		</div>
	);
}

/* {Object.entries(skillsMock).map(([key, value], index) => {
	console.log(value);
	value.map(item => console.log(item));
})} */
