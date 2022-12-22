import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { ButtonsCart } from "../ButtonsCart/ButtonsCart";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
	

	const { addItem, cartList } = useCartContext();
	const [isInCart, setIsInCart] = useState("false");

	const onAdd = (quantity) => {
		setIsInCart("true");

		//esta funcion proviene del Cartcontext
		addItem({ ...product, quantity });
	};

/*console.log(cartList);*/
	return (
		<article className="CardDetail">
			<picture>
				<img
					src={product.img}
					alt={product.name}
					className="ItemImg"
				/>
			</picture>
			<header className="HeaderDetail">
				<h2> {product.name} </h2>
			</header>

			<section className="InfoDetail">
				<p>Categoria:{product.category}</p>
				<p>Descripción: {product.description}</p>
				<p>Precio: {product.price}</p>
				<p>stock: {product.stock}</p>
			</section>
			<footer className="ItemFooter">
				{isInCart === "false" ? (
					<ItemCount initial={1}  onAdd={onAdd} />
				) : (
					<ButtonsCart />
				)}
			</footer>
		</article>
	);
};

export default ItemDetail;
