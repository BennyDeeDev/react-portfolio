import React from "react";
import navbarMock from "../mocks/navbarMock";

export default function NavBar() {
	return (
		<div className="w-full h-12 bg-gray-700 sticky top-0 z-50 flex justify-around items-center text-white border-b-4 border-minimalist-lime">
			{navbarMock.map((nav) => (
				<div className="flex-1 mx-8">
					<nav className="text-center">{nav.text}</nav>
				</div>
			))}
		</div>
	);
}
