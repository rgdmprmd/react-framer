import html from "../assets/html5.svg";
import bootstrap from "../assets/bootstrap.svg";
import codeigniter from "../assets/codeigniter.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import react from "../assets/react-old.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import StackMarquee from "./stack-marquee.comp";

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

const LogoMarquee = () => {
	return (
		<div className="w-full h-min max-w-full opacity-100 flex flex-row flex-nowrap justify-center items-center overflow-visible p-0 gap-5">
			<div className="w-[1px] h-min flex flex-grow flex-col flex-nowrap gap-5 justify-start overflow-hidden p-0 relative rounded-tl-3xl rounded-tr-3xl opacity-100">
				<div className=" w-full flex h-9">
					<marquee className="flex w-full h-full max-w-full max-h-full place-items-center m-0 p-3 list-none opacity-100 overflow-hidden maskGradient">
						<ul className="flex w-full h-full max-w-full max-h-full  place-items-center m-0 p-0 list-none gap-8 relative flex-row translate-x-0">
							{stacks.map((stac, idx) => (
								<li key={idx}>
									<StackMarquee imageStack={stac} />
								</li>
							))}
						</ul>
					</marquee>
				</div>
			</div>
		</div>
	);
};

export default LogoMarquee;
