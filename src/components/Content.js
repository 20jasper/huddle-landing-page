import { ContentSection } from "./ContentSection";

import growTogether from "../images/illustration-grow-together.svg"

import bgSectionTopMobile1 from "../images/bg-section-top-mobile-1.svg"

export function Content() {
	return (
		<section className="content">
			<ContentSection
				imageSource={growTogether}
				imageAlt="3 pink people standing in a line"
				boldText="Grow Together"
				regularText="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
			// style={{ backgroundImage: `url(${bgSectionTopMobile1});` }}
			/>
		</section>
	);
}