// eslint-disable-next-line react/prop-types
const Stack = ({ imageStack }) => {
	const { img, text } = imageStack;

	return (
		<div className="flex flex-row justify-center items-center content-center overflow-visible gap-2 grayscale opacity-60 transition duration-500 hover:opacity-100 hover:grayscale-0 hover:cursor-pointer">
			<img src={img} alt={`${text}`} className="w-8 md:w-12" />
			<h2 className="font-medium text-slate-500 text-lg md:text-xl">{text}</h2>
		</div>
	);
};

export default Stack;
