// eslint-disable-next-line react/prop-types
const Card = ({ content }) => {
	// eslint-disable-next-line react/prop-types
	const { title, img, article } = content;
	return (
		<div className="flex flex-col justify-center items-center overflow-visible relative p-0 content-center flex-nowrap gap-10 ">
			<img src={img} alt="Mountain" className="w-full h-80 block overflow-hidden relative aspect-[1.3333/1] rounded-2xl" />
			<div className="w-full h-40 flex flex-col justify-center items-start relative p-0 content-start flex-nowrap gap-5">
				<h1 className="whitespace-pre relative font-bold text-2xl text-left">{title}</h1>
				<p className="w-full whitespace-pre-wrap break-all overflow-visible relative font-normal text-slate-600 text-base text-left">{article}</p>
				<button type="button" className="flex box-border w-min h-10 flex-row justify-center items-center p-4 shadow-md bg-slate-900 content-center flex-nowrap gap-5 rounded-lg text-slate-200 text-center whitespace-pre font-semibold overflow-visible">
					Read More
				</button>
			</div>
		</div>
	);
};

export default Card;
