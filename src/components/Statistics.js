export function Statistics({ imageSource, imageAlt, boldText, regularText }) {
	return (
		<section className="statistics">
			<img className="statistics--img" src={imageSource} alt={imageAlt} />
			<section className="textContainer">
				<header>
					<h2 className="statistics--h2">{boldText}</h2>
				</header>
				<span>{regularText}</span>
			</section>
		</section>
	);
}