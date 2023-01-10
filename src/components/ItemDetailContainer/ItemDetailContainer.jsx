import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
	const [ product, setProduct ] = useState({});
	const [loading, setLoading] = useState(true);
	const { productId } = useParams();

/* A hook that is called when the component is mounted. It is used to fetch the data from the database. */

	 useEffect(()=>{
		const db=getFirestore()
		const queryDoc=doc(db, "products", productId)

		getDoc(queryDoc)
		.then(res=>setProduct({id:res.id,...res.data()}))
		.catch(err=>console.log(err))
		.finally(() => setLoading(false))
	 },[])

  
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
