import React from "react";
import navbarMock from "../mocks/navbarMock";

import { Link } from "react-scroll";

export default function NavBar() {
	return (
		<div className="w-full h-12 bg-gray-700 sticky top-0 z-50 flex justify-around items-center text-white border-b-4 border-minimalist-lime">
			{navbarMock.map((nav) => (
				<div className=" mx-8">
					<div className="text-center">
						<Link
							activeClass="opacity-100 text-minimalist-lime transition duration-300"
							to={nav.id}
							spy={true}
							smooth={true}
							offset={-100}>
							{nav.text}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
