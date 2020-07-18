import React from "react";

import resume from "../images/resume.svg";
import work from "../images/work.svg";
import education from "../images/education.svg";
import cvMock from "../mocks/cvMock";

import CvSection from "../components/CvSection";
import HeadTitle from "../components/HeadTitle";

export default function Cv() {
	return (
		<div>
			<HeadTitle title="Mein Lebenslauf" svg={resume} />
			<div className="flex justify-between">
				<CvSection title="Berufliche Laufbahn" svg={work} array={cvMock.work} />
				<div className="ml-12">
					<CvSection title="Ausbildung" svg={education} array={cvMock.education} />
				</div>
			</div>
		</div>
	);
}
