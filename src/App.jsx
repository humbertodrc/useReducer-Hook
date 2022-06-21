// import logo from "./logo.svg";
import "./App.css";
import ShoppingCart from './components/ShoppingCart';
// import ContadorMejorado from './components/ContadorMejorado';

function App() {
	return (
		<div className="App">
			<header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <ContadorMejorado /> */}
        <ShoppingCart />
			</header>
		</div>
	);
}

export default App;
