import React from "react";
//@ts-ignore
import Typewriter from "typewriter-effect";

export default function Hero() {
	return (
		<div className="flex bg-black h-screen w-screen text-white text-3xl">
			<div className="flex justify-center items-center flex-grow">
				<div className="relative w-1/2 -mt-16">
					<span className="text-terminal-green">user@b-derksen.de</span>
					<span>
						:<span className=" text-blue-500">~</span>$
					</span>
					<div className="inline absolute ml-1">
						<Typewriter
							options={{
								cursor: "_",
							}}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(2500)
									.typeString("./gretU")
									.pauseFor(10)
									.deleteChars(2)
									.typeString("etUser")
									.start();
							}}
						/>
					</div>
					<div className="absolute">
						<Typewriter
							options={{ cursor: "" }}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(5000)
									.pasteString(
										"Hey, ich bin Benjamin Derksen. <br/> Ich bin ein ambitionierter Full-Stack Entwickler."
									)
									.start();
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
