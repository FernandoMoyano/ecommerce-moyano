import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	//estado incicial del carrito, + funcion que modifica el estado

	const [cartList, setCartList] = useState([]);
	//estados y funciones globales

	
	//(agregar un item)
   const addItem = (product) => {
		// si está?
		const idx = cartList.findIndex(prod => prod.id === product.id) //no esta -> -1
		
		if (idx !== -1) {
			 // cartList[idx].cant = cartList[idx].cant + product.cant
			 cartList[idx].quantity +=  product.quantity
			 setCartList( [ ...cartList ] ) 
		} else {
			 setCartList([...cartList, product]) // push
		}  
	
  }



	/* Obtener la cantidad */
	const getQuantity = () => {
		let count = 0;
		cartList.forEach((prod) => {
			count = count + prod.quantity;
		});

		return count;
	};



	/* Precio total */
	const totalPrice= () => cartList.reduce((quantity, producto) => quantity += (producto.price * producto.quantity) , 0)



	/* Vaciar Carrito */
	const clearCart = () => {
		setCartList([]);
	};


	/* Remover un item */
	const removeItem = (id) => {
	setCartList(cartList.filter(prod => prod.id !== id))
		
	};

	return (
		<CartContext.Provider
			value={{
				cartList,
				addItem,
				getQuantity,
				clearCart,
				totalPrice,
				removeItem
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
