import React from "react";
//@ts-ignore
import Typewriter from "typewriter-effect";

export default function LandingPage() {
	return (
		<div id="typewriter">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.pasteString('<span style="color: #4af626;"> user@b-derksen.de:~$ </span>')
						.pauseFor(2500)
						.typeString(" ./gretU")
						.pauseFor(10)
						.deleteChars(2)
						.typeString("etUser <br>")
						.pasteString(
							"Hey, ich bin Benjamin Derksen <br> Ich bin ein ambitionierter Full-Stack Entwickler."
						)
						.start();
				}}
			/>
		</div>
	);
}
