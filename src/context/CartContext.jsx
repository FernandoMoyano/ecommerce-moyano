import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	//estado incicial del carrito, + funcion que modifica el estado

	const [cartList, setCartList] = useState([]);
	//estados y funciones globales

	
	//(agregar un producto)
	const addItem = (product) => {
		setCartList([...cartList, product]);
	};


	/* Obtener la cantidad */
	const getQuantity = () => {
		let count = 0;
		cartList.forEach((prod) => {
			count = count + prod.quantity;
		});

		return count;
	};


	/* Vaciar Carrito */
	const clearCart = () => {
		setCartList([]);
	};


	/* Remover un item */
	const removeItem = (id) => {
		const newProducts = cartList.filter(prod => prod.id !== id)
		setCartList(newProducts);
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				addItem,
				getQuantity,
				clearCart,
				removeItem
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
