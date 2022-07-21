import logo from "../images/logo.svg"

export function NavBar() {
	return (
		<nav className="nav">
			<img className="nav--img" src={logo} alt="Huddle Logo" />
			<button className="nav--button">Try It Free</button>
		</nav>
	);
}