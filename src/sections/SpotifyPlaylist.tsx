import React from "react";
/* import Headline from "../components/Headline"; */

//TODO: currentPlayingTrack https://developer.spotify.com/documentation/web-api/reference/player/get-the-users-currently-playing-track/
export default function SpotifyPlaylist() {
	return (
		<div className="flex bg-gray-200 p-4 justify-between">
			<div>
				<h2>Meine Lieblingsplaylist</h2>
				<p>
					Wenn du bis hierher gelesen hast, und dich interessiert was für eine Art Person ich bin, <br />
					kannst du dir gerne diese Spotify Playlist durchhören!
				</p>
			</div>
			<iframe
				className=""
				title="spotify"
				src="https://open.spotify.com/embed/playlist/37i9dQZF1DX843Qf4lrFtZ"
				width="300"
				height="380"
				allow="encrypted-media"></iframe>
		</div>
	);
}
