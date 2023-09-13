const Header = () => {
	return (
		<header className="box-border w-full h-min flex flex-col justify-center items-center py-[50px] px-[30px] relative gap-10">
			<h1 className="w-auto h-auto max-w-full tracking-tighter whitespace-pre-wrap text-[40px] text-center font-medium leading-[40px] relative">The Landing Page</h1>
			<img src="https://source.unsplash.com/400x600?mountain" className="w-full h-[450px] block overflow-hidden relative aspect-[1.77777/1] rounded-2xl bg-slate-200" />

			<div className="h-min w-[298px] flex flex-col justify-center items-center overflow-visible content-center gap-5">
				<p className="w-full h-auto whitespace-pre-wrap overflow-visible relative font-[500] text-lg text-center leading-[1.5]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<button type="button" className="box-border h-9 flex flex-row justify-center items-center p-4 bg-slate-900  content-center gap-5 rounded-lg text-slate-200 font-[600] text-sm text-center shadow-md">
					Get Started
				</button>
			</div>
		</header>
	);
};

export default Header;
