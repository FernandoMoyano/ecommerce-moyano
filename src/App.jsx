import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App";
import CartContainer from "./components/CartContainer/CartContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./context/CartContext";

function App() {
	return (
		<>
			<CartContextProvider>
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
							element={<CartContainer />}
						/>
						<Route
							path="*"
							element={<Navigate to="/" />}
						/>
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;
