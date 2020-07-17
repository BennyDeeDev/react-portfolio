import React from "react";
import skillsMock from "../mocks/skillsMock";
import Skill from "../components/Skill";
import skill from "../images/skills.svg";
import Headline from "../components/Headline";
import profilepicture from "../images/profilepicture.jpg";

export default function Skills() {
	return (
		<div>
			<Headline svg={skill} title="Meine Fähigkeiten" />
			<div className="flex justify-between">
				<div className="flex-col justify-center w-1/2">
					{/* <div className="flex justify-center">
						<img
							className="object-cover rounded-full border border-minimalist-gray"
							style={{ width: "12rem", height: "12rem" }}
							src={profilepicture}
							alt=""
						/>
					</div> */}
					<div className="bg-gray-300 flex mt-8 p-4 rounded-lg">
						<img
							className="object-cover rounded-full border border-minimalist-gray"
							style={{ width: "12rem", height: "12rem" }}
							src={profilepicture}
							alt=""
						/>
						<div className="m-4">
							<p>Über mich:</p>
							<p>
								Ich bin ein Fullstack-Developer aus Waiblingen
								(Stuttgart). JavaScript ist meine Leidenschaft,
								egal ob dynamisches rendern von UI-Komponenten
								mit React.js oder Backend Controller mit
								Express.js.
							</p>
						</div>
					</div>
				</div>
				<div className="flex-col w-1/2 flex-grow ml-12">
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
		</div>
	);
}

/* {Object.entries(skillsMock).map(([key, value], index) => {
	console.log(value);
	value.map(item => console.log(item));
})} */
