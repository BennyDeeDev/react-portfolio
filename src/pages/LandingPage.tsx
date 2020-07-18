import React from "react";
import Hero from "../sections/Hero";
import Strengths from "../sections/Strengths";
import Skills from "../sections/Skills";
import SpotifyPlaylist from "../sections/SpotifyPlaylist";

export default function LandingPage() {
	return (
		<div>
			<Hero />
			<div className="mx-auto max-w-screen-xl px-4 py-8">
				<Strengths />
				<Skills />
			</div>
			<SpotifyPlaylist />
		</div>
	);
}
