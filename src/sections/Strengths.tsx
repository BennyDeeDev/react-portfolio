import React from "react";
import strengthsMock from "../mocks/strengthsMock";
import TextWithSvg from "../components/TextWithSvg";
import strength from "../images/strength.svg";

export default function Strengths() {
	return (
		<div className="">
			<TextWithSvg
				svg={strength}
				title="Meine Stärken"
				styleSvg="w-8"
				Tag="h1"
				styleDiv="items-center justify-center mt-24 mb-8"
			/>
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
