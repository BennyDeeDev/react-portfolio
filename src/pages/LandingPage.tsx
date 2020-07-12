import React from "react";
import Hero from "../sections/Hero";
import Strengths from "../sections/Strengths";

export default function LandingPage() {
	return (
		<div>
			<Hero />
			<div className="mx-auto max-w-screen-xl px-4 py-8">
				<Strengths />
			</div>
		</div>
	);
}
