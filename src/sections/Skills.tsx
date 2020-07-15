import React from "react";
import skillsMock from "../mocks/skillsMock";
// @ts-ignore-file
export default function Skills() {
	return (
		<div>
			<h1 className="text-center">Meine Fähigkeiten</h1>
			<div>
				<h2>Frontend</h2>
				{skillsMock.frontend.map((skill, index) => (
					<div key={index} className="flex items-center">
						<img
							className="w-16 h-16 m-4"
							src={skill.svg}
							alt={skill.text}
						/>
						<div className="border border-minimalist-gray rounded-lg flex w-full">
							<div className="bg-gray-300 w-24 h-6 flex rounded-l-lg items-center p-1">
								<span className="text-xs ">{skill.text}</span>
							</div>
							<div className="bg-gray-500 w-full rounded-r-lg h-6">
								<div
									className="bg-minimalist-teal h-6"
									style={{ width: skill.progress }}
								></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

/* {Object.entries(skillsMock).map(([key, value], index) => {
	console.log(value);
	value.map(item => console.log(item));
})} */
