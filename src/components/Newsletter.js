export function Newsletter() {
	return (
		<section className="newsletter">
			<header className="newsletter--header">
				<h3 className="newsletter--h3">NEWSLETTER</h3>
			</header>
			<p className="newsletter--p">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
			</p>
			<form>
				<label className="newsletter--label" htmlFor="email">Email</label>
				<input className="newsletter--input" type="text" id="email" required />
				<button className="newsletter--button">Subscribe</button>
			</form>
		</section>
	);
}