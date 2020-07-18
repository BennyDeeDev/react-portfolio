import React from "react";
import TextWithSvg from "../components/TextWithSvg";

import resume from "../images/resume.svg";
import work from "../images/work.svg";
import education from "../images/education.svg";
import cvMock from "../mocks/cvMock";

import CvSection from "../components/CvSection";

export default function Cv() {
	return (
		<div>
			<TextWithSvg
				title="Mein Lebenslauf"
				Tag="h1"
				svg={resume}
				styleDiv="mt-24 mb-8 items-center justify-center"
				styleSvg="w-8"
			/>
			<div className="flex justify-between">
				<CvSection title="Berufliche Laufbahn" svg={work} array={cvMock.work} />
				<div className="ml-12">
					<CvSection title="Ausbildung" svg={education} array={cvMock.education} />
				</div>
			</div>
		</div>
	);
}
