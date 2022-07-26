import './index.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Content } from "./components/Content";
import { MainButton } from './components/MainButton';
import { Footer } from './components/Footer';



const mobileBreakPoint = "375px"

function App() {
	return (
		<div className="App">
			<NavBar />
			<Main />
			<Content
				mobileBreakPoint={mobileBreakPoint}
			/>
			<header>
				<h2 className="hero-h1">Ready To Build Your Community?</h2>
			</header>
			<MainButton />
			<Footer />
		</div>
	);
}

export default App;
