import React from "react";
import strengthsMock from "../mocks/strengthsMock";
import strength from "../images/strength.svg";
import HeadTitle from "../components/HeadTitle";

export default function Strengths() {
	return (
		<div className="">
			<HeadTitle svg={strength} title="Meine Stärken" />
			<div className="flex justify-between">
				{strengthsMock.map((strength, index) => (
					<div key={index} className="flex flex-col items-center ">
						<h2 className="text-3xl">{strength.headline}</h2>
						<img className="w-32 m-4" src={strength.svg} alt={strength.headline} />
						<p>{strength.caption}</p>
					</div>
				))}
			</div>
		</div>
	);
}
