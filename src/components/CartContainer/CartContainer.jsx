import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
	const { cartList, addItem, removeItem, clearCart, } = useCartContext();
  

	console.log(cartList);

	return (
		<div>
			{cartList.map((product) => (
				<article key={product.id} className="CardDetail">
					<header className="HeaderDetail">
						<h2> Product: {product.name} </h2>
					</header>

					<section className="InfoDetail">
						<p>Categoria: {product.category}</p>
						<p>cantidad: {product.quantity}</p>
						<p>Precio: {product.price}</p>
					</section>
					<footer className="ItemFooter">
						<button>-</button>
						<button onClick={addItem}>+</button>
						<button onClick={removeItem}>X</button>
					</footer>
				</article>
			))}
      <button onClick={clearCart}>Vaciar Carrito</button>
		</div>
	);
};

export default CartContainer;
