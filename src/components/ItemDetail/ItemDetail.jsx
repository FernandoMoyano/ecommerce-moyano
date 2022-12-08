import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
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
				<p >Descripción: {product.description}</p>
				<p >Precio: {product.price}</p>
				<p >stock: {product.stock}</p>
			</section>
			<footer className="ItemFooter"></footer>
		</article>
	);
};

export default ItemDetail;
