import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
	const { getQuantity } = useCartContext();

	return (
		<div className="cart-container">
			<img className="cart" src="../../../public/images/cart3.svg"></img>
			<div className="cart-item">{getQuantity()}</div>
		</div>
	);
};

export default CartWidget;
