import React from "react";
//@ts-ignore
import Typewriter from "typewriter-effect";

//TODO: 	style={{ width: "604px", height: "110px" }} mobile height: 135px //Ubuntu in spans?
export default function Hero() {
	return (
		<div className="flex bg-black h-screen text-white text-xl md:text-3xl p-8">
			<div className="flex justify-center items-center flex-grow ">
				<div className="relative md:w-1/2">
					<h2 className="inline-block text-terminal-green">
						user@benjaminderksen.de
					</h2>
					<span className="">
						:<span className="text-blue-500">~</span>$
					</span>
					<div className="inline ml-1 md:absolute">
						<Typewriter
							options={{
								cursor: "_"
							}}
							onInit={typewriter => {
								typewriter
									.pauseFor(1000)
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
							onInit={typewriter => {
								typewriter
									.pauseFor(4500)
									.pasteString(
										"Hey, ich bin Benny. <br/> Ich bin ein ambitionierter JavaScript Entwickler."
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
