import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	//estado incicial del carrito, + funcion que modifica el estado

	const [cartList, setCartList] = useState([]);
	//estados y funciones globales



	//(agregar un item)
	const addItem = (product) => {
		//si el producto no esta -> -1
		const idx = cartList.findIndex((prod) => prod.id === product.id);

		if (idx !== -1) {
			//si el producto NO ESTÁ
			cartList[idx].quantity += product.quantity;
			setCartList([...cartList]);
		} else {
			//si el producto SI ESTÁ
			setCartList([...cartList, product]); // push del product
		}
	};


	/* Obtener la cantidad */
	const getQuantity = () => {
		let count = 0;
		cartList.forEach((prod) => {
			count = count + prod.quantity;
		});

		return count;
	};

	
	/* Precio total */
	const totalPrice = () =>
		cartList.reduce(
			(quantity, producto) =>
				(quantity +=
					producto.price.toFixed(3) *
					producto.quantity.toFixed(3)),
			0
		);

	/* Vaciar Carrito */
	const clearCart = () => {
		setCartList([]);
	};

	/* Remover un item */
	const removeItem = (id) => {
		setCartList(cartList.filter((prod) => prod.id !== id));
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				addItem,
				getQuantity,
				clearCart,
				totalPrice,
				removeItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
