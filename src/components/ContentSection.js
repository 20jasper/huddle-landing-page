export function ContentSection({ imageSource, imageAlt, boldText, regularText, style }) {
	return (
		<section className="contentContainer" style={style}>
			<img className="content--img" src={imageSource} alt={imageAlt} />
			<section className="textContainer">
				<header>
					<h3 className="content--h3">{boldText}</h3>
				</header>
				<p>{regularText}</p>
			</section>
		</section>
	);
}