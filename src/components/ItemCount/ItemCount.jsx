import { useState } from "react";
import "./ItemCount.css"

export const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
	const [count, setCount] = useState(initial);

	const increment = () => {
		if (count <= stock) {
			setCount(count + 1);
		}
	};

	const decrement = () => {
		if (count > initial) {
			setCount(count - 1);
		}
	};

	const handleOnAdd = () => {
		onAdd(count);
	};

	return (
		<div className="containerCount">
			<div className="containerbuttons">
				<button className="decrement" onClick={decrement}>
					-
				</button>
				<label>{count}</label>
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
