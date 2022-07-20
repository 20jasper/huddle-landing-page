import { Statistics } from "./Statistics";

export function StatisticsContainer() {
	return (
		<section className="statisticsContainer">
			<Statistics
				imageSource="./images/icon-communities.svg"
				imageAlt="idk"
				boldText="1.4k+"
				regularText="Communities Formed"
			/>
		</section>
	);
}