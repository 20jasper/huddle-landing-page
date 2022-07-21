import { MainButton } from "./MainButton";
import { StatisticsContainer } from "./StatisticsContainer";

import screenMockups from "../images/screen-mockups.svg"

export function Hero() {
	return (
		<section className="hero">
			<header>
				<h1 className="hero-h1">Build The Community Your Fans Will Love</h1>
			</header>
			<p className="hero-p">  Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
			</p>
			<MainButton />
			<img className="hero--img" src={screenMockups} alt="A mockup of two screen sizes for the huddle app" />
			<StatisticsContainer />
		</section>
	);
}




