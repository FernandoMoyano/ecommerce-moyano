import React,{useState} from "react";
import { ButtonsCart } from "../ButtonsCart/ButtonsCart";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";


const ItemDetail = ({ product }) => {
	const [isInCart, setIsInCart] = useState("false");

	const onAdd = () => {
		setIsInCart("true");
	};

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
					<ItemCount initial={1} stock={10} onAdd={onAdd} />
				) : (
					<ButtonsCart />
				)}
			</footer>
		</article>
	);
};

export default ItemDetail;
