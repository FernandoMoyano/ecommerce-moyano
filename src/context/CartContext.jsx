import { createContext } from "react";

const CartContext = createContext([]);



export const CartContextProvider = ({ children }) => {
	//estados y funciones globales
	return (
   <CartContext.Provider value={{}}>
      {children}
   </CartContext.Provider>
   )
};

