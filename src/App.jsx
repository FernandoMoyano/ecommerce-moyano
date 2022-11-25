import "./App";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
	let greeting = "Ecommerce-Fernando Moyano";

	
	let greet = () => {
		alert("BIENVENIDOS A MI FUTURO ECOMMERCE !!");
	};

	return (
		<div>
			<NavBar />
			<ItemListContainer 
				presentacion={greeting} 
				saludar={greet} />
		</div>
	);
}

export default App;
