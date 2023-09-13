import Features from "../../component/features.comp";
import Header from "../../component/header.comp";
import Logo from "../../component/logo";
import LogoMarquee from "../../component/logo-marquee.comp";

const Home = () => {
	return (
		<>
			<Header />
			<LogoMarquee />
			<Features />
			<Logo />
		</>
	);
};

export default Home;
