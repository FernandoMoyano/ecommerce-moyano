import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  getProductById } from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
	const [ product, setProduct ] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();

/* 	useEffect(() => {
		getProducts()
			.then((res) => setProduct(res.find(product=>product.id===parseInt(productId))))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	 */

	useEffect(()=>{
      getProductById(productId)
      .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])

    console.log(product)





	return (
		<div className="itemListContainer">
			{loading ? (
				<div className="spinner"></div>
			) : (
				<ItemDetail product={product} />
			)}
		</div>
	);
};
export default ItemDetailContainer;
