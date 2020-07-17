import React from "react";

export default function Skill({ text, svg, progress }) {
	return (
		<div className="flex items-center my-4">
			<div className="border border-minimalist-gray rounded-lg flex w-full overflow-hidden">
				<div className="bg-gray-300 w-32 h-6 flex items-center p-1">
					<img className="w-4 h-4" src={svg} alt={text} />
					<span className="text-xs p-2">{text}</span>
				</div>
				<div className="bg-gray-500 w-full h-6">
					<div className="bg-minimalist-teal h-6" style={{ width: progress }}></div>
				</div>
				<span className="text-xs px-4 flex items-center">{progress}</span>
			</div>
		</div>
	);
}
