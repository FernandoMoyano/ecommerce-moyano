import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const { categoryId } = useParams();



	useEffect(() => {
		const db = getFirestore();
		const queryCollection = collection(db, "products");

		if (categoryId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoryId)
			);
			getDocs(queryFilter)
				.then((data) =>
					setProducts(
						data.docs.map((product) => ({
							id: product.id,
							...product.data(),
						}))
					)
				)
				.catch((err) => console.log(err))
				.finally(() => setLoading(false));
		} else {
			getDocs(queryCollection)
				.then((res) =>
					setProducts(
						res.docs.map((product) => ({
							id: product.id,
							...product.data(),
						}))
					)
				)
				.catch((err) => console.log(err))
				.finally(() => setLoading(false));
		}
	}, [categoryId]);



	
	return (
		<div className="itemListContainer">
			{loading ? (
				<div className="spinner"></div>
			) : (
				<ItemList products={products} />
			)}
		</div>
	);
};

export default ItemListContainer;


