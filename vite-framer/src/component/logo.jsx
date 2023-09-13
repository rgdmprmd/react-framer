import html from "../assets/html5.svg";
import bootstrap from "../assets/bootstrap.svg";
import codeigniter from "../assets/codeigniter.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import react from "../assets/react-old.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import Stack from "./stack.comp";

const stacks = [
	{ img: html, text: "HTML" },
	{ img: bootstrap, text: "Bootstrap" },
	{ img: tailwindcss, text: "TailwindCss" },
	{ img: php, text: "PHP" },
	{ img: codeigniter, text: "Codeigniter" },
	{ img: javascript, text: "Javascript" },
	{ img: nodejs, text: "NodeJs" },
	{ img: react, text: "ReactJs" },
];

const Logo = () => {
	return (
		<section id="logo" className=" w-full h-min flex flex-col justify-center items-center px-[20px] py-[60px] overflow-hidden relative content-center gap-10">
			<div className="h-min w-[1000px] max-w-full flex flex-row justify-center items-center overflow-visible relative p-0 content-center flex-wrap gap-5">
				{stacks.map((stac, idx) => (
					<Stack key={idx} imageStack={stac} />
				))}
			</div>
		</section>
	);
};

export default Logo;
