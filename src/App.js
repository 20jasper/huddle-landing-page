import './index.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';

const mobileBreakPoint = "375px"

function App() {
	return (
		<div className="App">
			<NavBar />
			<Main />
		</div>
	);
}

export default App;
