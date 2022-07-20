import './index.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const mobileBreakPoint = "375px"

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}

export default App;
