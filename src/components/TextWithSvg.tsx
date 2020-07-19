import React from "react";

export default function Headline({ Tag, svg, styleSvg, title, styleDiv }) {
	return (
		<div className={`flex ${styleDiv}`}>
			{svg ? <img className={`${styleSvg} mr-1`} src={svg} alt={title} /> : null}
			<Tag>{title}</Tag>
		</div>
	);
}
