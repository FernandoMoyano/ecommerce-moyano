import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {  getProductById } from "../../helpers/getProducts";
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
	const [ product, setProduct ] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();



/* 	useEffect(()=>{
      getProductById(productId)
      .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[]) */

	  /*   console.log(product) */



	 useEffect(()=>{
		const db=getFirestore()
		const queryDoc=doc(db, "products", productId)

		getDoc(queryDoc)
		.then(res=>setProduct({id:res.id,...res.data()}))
		.catch(err=>console.log(err))
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
