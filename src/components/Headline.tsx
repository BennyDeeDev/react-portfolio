import React from "react";

export default function Headline({ svg, title }) {
	return (
		<div className="flex justify-center mt-16 mb-4 items-center">
			<img className="w-8 m-1" src={svg} alt="skills" />
			<h1 className="text-center">{title}</h1>
		</div>
	);
}
