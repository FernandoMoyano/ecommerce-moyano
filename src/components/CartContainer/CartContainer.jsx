import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
	const { cartList, addItem, removeItem, clearCart, totalPrice } = useCartContext();

	/* 	console.log(cartList); */

	return (
		<div className="ContenedorCart">
			{cartList.map((product) => (
				<article key={product.id} className="CardDetail">
					<header className="HeaderDetail">
						<h2> Product: {product.name} </h2>
					</header>

					<section className="InfoDetail">
						<p>
							Categoria:{" "}
							<span className="InfoDetailItem">
								{product.category}
							</span>
						</p>
						<p>
							cantidad:{" "}
							<span className="InfoDetailItem">
								{product.quantity}
							</span>
						</p>
						<p>
							Precio:${" "}
							<span className="InfoDetailItem">
								{product.price}
							</span>
						</p>
					</section>
					<footer className="FooterButtons">
						{/* <button className="Sustract">-</button>
						<button className="Add" onClick={addItem}>+</button> */}
						<button className="Remove"
							onClick={() =>
								removeItem(
									product.id
								)
							}
						>
							X
						</button>
					</footer>
				</article>
			))}
			{totalPrice() > 0 && (
				<label className="TotalPrice">
					El precio total es:{" "}
					<span className="Price">$ {totalPrice()}</span>
				</label>
			)}
			<button className="ClearCart" onClick={clearCart}>
				Vaciar Carrito
			</button>
		</div>
	);
};

export default CartContainer;
