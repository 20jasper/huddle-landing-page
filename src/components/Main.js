import { Hero } from "./Hero";
import { MainButton } from "./MainButton";

export function Main() {
	return (
		<main>
			<Hero />
			<header>
				<h2 className="hero-h1">Ready To Build Your Community?</h2>
			</header>
			<MainButton />
		</main>
	);
}