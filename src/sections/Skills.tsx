import React from "react";
import skillsMock from "../mocks/skillsMock";

import skill from "../images/skills.svg";
import TextWithSvg from "../components/TextWithSvg";
import profilepicture from "../images/profilepicture.jpg";
import user from "../images/user.svg";
import HeadTitle from "../components/HeadTitle";
import linksMock from "../mocks/linksMock";

import info from "../images/info.svg";
import SkillSection from "../components/SkillSection";

import frontend from "../images/frontend.svg";
import backend from "../images/backend.svg";
import internet from "../images/internet.svg";

export default function Skills() {
	return (
		<div id="skills">
			<HeadTitle svg={skill} title="Meine Fähigkeiten" />
			<div className="flex justify-between">
				<div className="flex-col flex-1 justify-center">
					<div className="bg-gray-300 p-4 mt-3 rounded-lg">
						<div className="flex">
							<img
								className="object-cover rounded-full border border-minimalist-gray w-48 h-48"
								src={profilepicture}
								alt=""
							/>

							<div className="m-4">
								<TextWithSvg svg={user} styleSvg="w-4" title="Über mich:" Tag="h6" styleDiv="" />
								<p>
									Ich bin ein JavaScript-Entwickler aus Waiblingen (Stuttgart). JavaScript ist meine
									Leidenschaft, egal ob dynamisches rendern von UI-Komponenten mit React.js oder
									Backend Controller mit Express.js. In meiner Freizeit programmiere ich entweder an
									einem aktuellen Projekt oder nehme Kurse für meinen Udemy Channel auf.
								</p>
							</div>
						</div>
						<TextWithSvg svg={info} styleSvg="w-4" title="Interessante Links:" Tag="h6" styleDiv="" />
						{linksMock.map((link, index) => (
							<div className="my-4" key={index}>
								<div className="flex">
									<TextWithSvg
										svg={link.svg}
										styleSvg="w-4"
										title={link.title + ":"}
										Tag="p"
										styleDiv=""
									/>
									<a
										className="ml-1 underline text-minimalist-gray"
										href={link.link}
										target="_blank"
										rel="noopener noreferrer">
										{link.link}
									</a>
								</div>
								<p>{link.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex-col flex-grow ml-12">
					<SkillSection array={skillsMock.frontend} svg={frontend} title="Front End" />
					<SkillSection array={skillsMock.backend} svg={backend} title="Back End" />
					<SkillSection array={skillsMock.general} svg={internet} title="Allgemein" />
					{/* 					<h2>Frontend</h2>
					{skillsMock.frontend.map((skill, index) => (
						<Skill key={index} text={skill.text} svg={skill.svg} progress={skill.progress} />
					))}
					<h2>Backend</h2>
					{skillsMock.backend.map((skill, index) => (
						<Skill key={index} text={skill.text} svg={skill.svg} progress={skill.progress} />
					))}
					<h2>General</h2>
					{skillsMock.general.map((skill, index) => (
						<Skill key={index} text={skill.text} svg={skill.svg} progress={skill.progress} />
					))} */}
				</div>
			</div>
		</div>
	);
}
