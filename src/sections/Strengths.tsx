import React from "react";
import strengthsMock from "../mocks/strengthsMock";

export default function Strengths() {
	return (
		<div className="">
			<h1 className="text-center m-4">Meine Philosophie</h1>
			<div className="flex justify-around">
				{strengthsMock.map((strength, index) => (
					<div key={index} className="flex flex-col items-center flex-1">
						<h2 className="text-3xl">{strength.headline}</h2>
						<img className="w-32 m-4" src={strength.svg} alt={strength.headline} />
						<p>{strength.caption}</p>
					</div>
				))}
			</div>
		</div>
	);
}
