import React from "react";

export default function Headline({ Tag, svg, styleSvg, title, styleDiv }) {
	return (
		<div className={`flex ${styleDiv}`}>
			<img className={`${styleSvg} m-1"`} src={svg} alt="skills" />
			<Tag className="text-center">{title}</Tag>
		</div>
	);
}
