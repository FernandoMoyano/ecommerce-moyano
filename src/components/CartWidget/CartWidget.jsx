import React from "react";
import "./CartWidget.css";

const CartWidget = () => {

	return (
		<div className="cart-container">
			<img
				className="cart"
				src="../../../public/images/cart3.svg"
			></img>
			<div className="cart-item">1</div>
		</div>
		
	);
};

export default CartWidget;
