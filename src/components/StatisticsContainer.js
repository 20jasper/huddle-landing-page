import { Statistics } from "./Statistics";

export function StatisticsContainer() {
	return (
		<section className="statisticsContainer">
			<Statistics
				imageSource="./images/icon-communities.svg"
				imageAlt="3 pink people standing in a line"
				boldText="1.4k+"
				regularText="Communities Formed"
			/>
			<Statistics
				imageSource="./images/icon-messages.svg"
				imageAlt="pink message bubble"
				boldText="2.7m+"
				regularText="Messages Sent"
			/>
		</section>
	);
}