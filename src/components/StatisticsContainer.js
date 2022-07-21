import { Statistics } from "./Statistics";

import pinkPeople from "../images/icon-communities.svg"
import messages from "../images/icon-messages.svg"


export function StatisticsContainer() {
	return (
		<section className="statisticsContainer">
			<Statistics
				imageSource={pinkPeople}
				imageAlt="3 pink people standing in a line"
				boldText="1.4k+"
				regularText="Communities Formed"
			/>
			<Statistics
				imageSource={messages}
				imageAlt="pink message bubble"
				boldText="2.7m+"
				regularText="Messages Sent"
			/>
		</section>
	);
}