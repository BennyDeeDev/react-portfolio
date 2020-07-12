import React from "react";
//@ts-ignore
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
	return (
		<div className="bg-black h-screen w-screen text-white text-3xl">
			<div className="text-green-600">user@b-derksen.de:~$</div>
			<div className="">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.pauseFor(2500)
							.typeString("./gretU")
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
		</div>
	);
}
