import { useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({ initial = "1", stock = "35", onAdd }) => {
	const [quantity, setQuantity] = useState(initial);

	/* increment function */
	const increment = () => {
		if (quantity <= stock) {
			setQuantity(quantity + 1);
		}
	};
/* decrement function */
	const decrement = () => {
		if (quantity > initial) {
			setQuantity(quantity - 1);
		}
	};

/**
 * `handleOnAdd` is a function that calls `onAdd` with the value of `quantity` as an argument.
 */
	const handleOnAdd = () => {
		onAdd(quantity);
	};

	return (
		<div className="containerCount">
			<div className="containerbuttons">
				<button className="decrement" onClick={decrement}>
					-
				</button>
				<label>{quantity}</label>
				<button className="increment" onClick={increment}>
					+
				</button>
				<br />
			</div>
			<button className="handleOnAdd" onClick={handleOnAdd}>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ItemCount;
