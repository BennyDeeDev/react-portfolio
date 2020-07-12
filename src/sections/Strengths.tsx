import React from "react";
import strengthsMock from "../mocks/strengthsMock";

export default function Strengths() {
	return (
		<div className="flex justify-around">
			{strengthsMock.map((strength, index) => (
				<div className="flex flex-col items-center">
					<h2 className="text-3xl">{strength.headline}</h2>
					<img className="w-32" src={strength.svg} alt={strength.headline} />
					<p>{strength.caption}</p>
				</div>
			))}
		</div>
	);
}
