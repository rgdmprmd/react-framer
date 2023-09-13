import html from "../assets/html5.svg";
import bootstrap from "../assets/bootstrap.svg";
import codeigniter from "../assets/codeigniter.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import react from "../assets/react-old.svg";
import tailwindcss from "../assets/tailwindcss.svg";

const Logo = () => {
	return (
		<section id="logo" className="border-2 w-full h-min flex flex-col justify-center items-center px-[20px] py-[60px] overflow-hidden relative content-center gap-10">
			<div className="h-min w-[1000px] max-w-full flex flex-row justify-center items-center overflow-visible relative p-0 content-center flex-wrap gap-5">
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={html} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">HTML</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={bootstrap} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">Bootstrap</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={php} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">PHP</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={codeigniter} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">Codeigniter</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={javascript} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">Javascript</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={nodejs} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">NodeJs</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={react} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">ReactJs</h2>
				</div>
				<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2">
					<img src={tailwindcss} alt="" className="w-9 md:w-14" />
					<h2 className="font-medium text-slate-500">TailwindCss</h2>
				</div>
			</div>
		</section>
	);
};

export default Logo;
