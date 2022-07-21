import { ContentSection } from "./ContentSection";



export function Content() {
	return (
		<section className="content">
			<ContentSection
				imageSource="./images/illustration-grow-together.svg"
				imageAlt="3 pink people standing in a line"
				boldText="Grow Together"
				regularText="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
			// style="backgroundImage: url(./images/icon-email.svg) bottom no-repeat;"
			/>
		</section>
	);
}