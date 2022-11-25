import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ presentacion, saludar }) => {
	return (
		<div className="container-greet">
			<div style={{marginBottom:"2rem"}}>
				<h2>{presentacion}</h2>
			</div>
			<button onClick={saludar} className="greet">
				Greeting
			</button>
		</div>
	);
};

export default ItemListContainer;
