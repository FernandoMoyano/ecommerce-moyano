import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import "./App";
import Cart from "./components/CartContainer/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<>
			<CartContext.Provider value={{}}>
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route
							path="/"
							element={
								<ItemListContainer />
							}
						/>
						<Route
							path="/category/:categoryId"
							element={
								<ItemListContainer />
							}
						/>
						<Route
							path="/detail/:productId"
							element={
								<ItemDetailContainer />
							}
						/>
						<Route
							path="/cart"
							element={<Cart />}
						/>
						<Route
							path="*"
							element={<Navigate to="/" />}
						/>
					</Routes>
				</BrowserRouter>
			</CartContext.Provider>
		</>
	);
}

export default App;
