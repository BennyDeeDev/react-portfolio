import html5 from "../images/html5.svg";
import css3 from "../images/css3.svg";
import js from "../images/js.svg";

export default {
	frontend: [
		{ id: 1, svg: html5, text: "HTML", progress: "80%" },
		{ id: 2, svg: css3, text: "CSS", progress: "60%" },
		{ id: 3, svg: js, text: "JavaScript", progress: "80%" }
		/* { id: 4, svg: , text: "React (Redux, React Router)", progress: 80 },
			{ id: 5, svg: , text: "Vue (VueX, VueRouter)", progress: 90 },
			{ id: 6, svg: , text: "TypeScript", progress: 60 }, */
	],
	backend: [
		{ id: 1, svg: null, text: "Linux", progress: 60 },
		{ id: 2, svg: null, text: "Node.js (Express)", progress: 20 }
	],
	general: [
		{ id: 1, svg: null, text: "Git", progress: 40 },
		{ id: 2, svg: null, text: "VSCode", progress: 80 },
		{ id: 3, svg: null, text: "Agiles Arbeiten", progress: 20 }
	]
};
