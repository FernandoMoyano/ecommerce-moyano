import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	//initial state of the cart, plus the function that modifies the state

	const [cartList, setCartList] = useState([]);
	//global states and functions



	//add an item
	const addItem = (product) => {
		//the product is not -> -1
		const idx = cartList.findIndex((prod) => prod.id === product.id);

		if (idx !== -1) {
			//the product is not
			cartList[idx].quantity += product.quantity;
			setCartList([...cartList]);
		} else {
			//the product is
			setCartList([...cartList, product]); // push del product
		}
	};


	/* get the amount */
	const getQuantity = () => {
		let count = 0;
		cartList.forEach((prod) => {
			count = count + prod.quantity;
		});

		return count;
	};

	
	/* totalPrice function */
	const totalPrice = () =>
		cartList.reduce(
			(quantity, producto) =>
				(quantity +=
					producto.price.toFixed(3) *
					producto.quantity.toFixed(3)),
			0
		);

	/* empty cart */
	const clearCart = () => {
		setCartList([]);
	};

	/* Remove Item */
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
