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
			<div>
				<picture>
					<img
						src={product.img}
						alt={product.name}
						className="ItemImg"
					/>
				</picture>
				<div className="HeaderDetail">
					<h2> {product.name} </h2>
				</div>
			</div>

			<div className="InfoDetail">

				<div className="ContainerParrafo">
					<p><span className="InfoDescription">Categoria: </span>{product.category}</p>
					<p><span className="InfoDescription">Descripción:</span> {product.description}</p>
					<p><span className="InfoDescription">Precio: $</span> {product.price}</p>
					<p><span className="InfoDescription">stock: </span>{product.stock}</p>
				</div>

				<footer className="ItemFooter">
					{isInCart === "false" ? (
						<ItemCount
							initial={1}
							stock={product.stock}
							onAdd={onAdd}
						/>
					) : (
						<ButtonsCart />
					)}
				</footer>
			</div>
		</article>
	);
};

export default ItemDetail;
