import React from "react";
import Hero from "../sections/Hero";
import Strengths from "../sections/Strengths";

export default function LandingPage() {
	return (
		<div>
			<Hero />
			<div className="bg-white max-w-screen-lg mx-auto">
				<Strengths />
			</div>
		</div>
	);
}
