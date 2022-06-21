import logo from "./logo.svg";
import "./App.css";
import ContadorMejorado from './components/ContadorMejorado';

function App() {
	return (
		<div className="App">
			<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContadorMejorado />
			</header>
		</div>
	);
}

export default App;
