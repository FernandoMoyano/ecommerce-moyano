import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
	const { getQuantity } = useCartContext();

	return (
		<div className="cart-container">
			<img className="cart" src="https://cdn-icons-png.flaticon.com/512/107/107831.png"></img>
			<div className="cart-item">{getQuantity()>0 && getQuantity()}</div>
		</div>
	);
};

export default CartWidget;
