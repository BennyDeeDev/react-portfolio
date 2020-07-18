import React from "react";
import skillsMock from "../mocks/skillsMock";
import Skill from "../components/Skill";
import skill from "../images/skills.svg";
import TextWithSvg from "../components/TextWithSvg";
import profilepicture from "../images/profilepicture.jpg";
import user from "../images/user.svg";
import HeadTitle from "../components/HeadTitle";

export default function Skills() {
	return (
		<div>
			<HeadTitle svg={skill} title="Meine Fähigkeiten" />
			<div className="flex justify-between">
				<div className="flex-col flex-1 justify-center">
					<div className="bg-gray-300 flex mt-4 p-4 rounded-lg">
						<img
							className="object-cover rounded-full border border-minimalist-gray"
							style={{ width: "12rem", height: "12rem" }}
							src={profilepicture}
							alt=""
						/>

						<div className="m-4">
							<TextWithSvg svg={user} styleSvg="w-4" title="Über mich:" Tag="p" styleDiv="" />
							<p>
								Ich bin ein Fullstack-Developer aus Waiblingen (Stuttgart). JavaScript ist meine
								Leidenschaft, egal ob dynamisches rendern von UI-Komponenten mit React.js oder Backend
								Controller mit Express.js. In meiner Freizeit programmiere ich entweder an einem
								aktuellen Projekt oder nehme Kurse für meinen Udemy Channel auf.
							</p>
						</div>
					</div>
					<img className="m-2" src="https://www.codewars.com/users/Relentl3zz/badges/small" alt="CodeWars" />
					<figure>
						<embed src="https://wakatime.com/share/@relentl3zz/cc7c73a5-cad4-4c12-877e-5eea8893b562.svg"></embed>
					</figure>
				</div>
				<div className="flex-col flex-grow ml-12">
					<h2>Frontend</h2>
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
					))}
				</div>
			</div>
		</div>
	);
}
