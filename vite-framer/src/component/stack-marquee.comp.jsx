const StackMarquee = ({ imageStack }) => {
	const { img, text } = imageStack;

	return (
		<div className="flex flex-row flex-nowrap justify-start items-center w-min h-min p-0 overflow-visible grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0 hover:cursor-pointer">
			<img src={img} alt={`${text}`} className="w-5 md:w-10 opacity-100" />
			<h2 className="flex flex-col justify-start transform-none opacity-100 font-medium text-slate-500 text-lg md:text-xl">{text}</h2>
		</div>
	);
};

export default StackMarquee;
