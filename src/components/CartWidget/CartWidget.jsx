import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
	const { getQuantity } = useCartContext();

	return (
		<div className="cart-container">
			<img className="cart" src="/public/cart2.svg"></img>
			<div className="cart-item">{getQuantity()>0 && getQuantity()}</div>
		</div>
	);
};

export default CartWidget;
