import Card from "./card.comp";

const contents = [
	{
		id: 1,
		title: "Fast",
		img: "https://source.unsplash.com/600x400?white_mountain",
		article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt delectus error!",
	},
	{
		id: 2,
		title: "Easy",
		img: "https://source.unsplash.com/600x400?blue_mountain",
		article: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa incidunt delectus error!",
	},
];

const Features = () => {
	return (
		<section id="features" className="border-2 box-border w-full h-min flex flex-col justify-center items-center py-[60px] px-[30px] bg-slate-100 overflow-hidden relative content-center flex-nowrap gap-10">
			{contents.map((content) => (
				<Card content={content} />
			))}
		</section>
	);
};

export default Features;
