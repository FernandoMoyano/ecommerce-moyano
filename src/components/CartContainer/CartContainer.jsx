import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Col, Container, Modal, ModalDialog, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./CartContainer.css";
import Swal from "sweetalert2";

/* A function that is being exported. */
const CartContainer = () => {
	const db = getFirestore();
	const { cartList, removeItem, clearCart, totalPrice } = useCartContext();
	const [modalShow, setModalShow] = useState(false);

	const [email2, setEmail2] = useState("");
	const [order, setOrder] = useState({
		buyer: {
			name: "",
			email: "",
			phone: "",
		},
		items: cartList,
		total: totalPrice(),
	});

	/* Updating the order according to the changes in the cart. */
	useEffect(() => {
		setOrder((currentOrder) => {
			return {
				...currentOrder,
				items: cartList,
				total: totalPrice(),
			};
		});
	}, [cartList]);

	/**
	 * It shows a message with a title, text, and icon.
	 */
	const showMessage = (type, text, title) => {
		Swal.fire({
			position: "center",
			title: title,
			text: text,
			icon: type,
			showConfirmButton: false,
			timer: 3000,
		});
	};

	/* Creating the order. */
	const createOrder = () => {
		const queryOrders = collection(db, "orders");
		if (order.buyer.name === "") {
			showMessage("error", "Todos los campos deben ser completados", false);
		} else if (order.buyer.phone === 0) {
			showMessage("error", "Todos los campos deben ser completados", false);
		} else if (order.buyer.email === "") {
			showMessage("error", "Todos los campos deben ser completados", false);
		} else if (email2 === "") {
			showMessage("error", "Todos los campos deben ser completados", false);
		} else if (order.buyer.email !== email2)
			showMessage("error", "Los emails deben coincidir", false);
		else {


			/* Updating the stock in the database. */
			cartList.forEach((product) => {
				const queryDoc = doc(db, "products", product.id);
				let newStock = product.stock - product.quantity;
				setDoc(queryDoc, { stock: newStock }, { merge: true });
			});

			/* Creating the order. */
			addDoc(queryOrders, order)
				.then(({ id }) => {
					showMessage(
						"success",
						`Felicidades por tu compra`,
						`Te enviaremos los datos de facturación por Mail.\nTu ID de compra es:  ${id}`
					);
					clearCart();
					setModalShow(false);
				})
				.catch(() =>
					showMessage(
						"error",
						"Hubo un problema con su compra",
						false
					)
				);
		}
	};

	
/**
 * When the user changes the value of an input, update the state of the order object with the new
 * value.
 */

	const handleOnChange = (e) => {
		setOrder({
			...order,
			buyer: {
				...order.buyer,
				[e.target.name]: e.target.value,
			},
		});
	};

	/*function to place the email a second time*/

	const handleOnChangeMail2 = (e) => {
		setEmail2(e.target.value);
	};

	return (
		<Container fluid className="cartContainer">
			<div className="h1">
				<h1>Carrito de compras</h1>
			</div>
			{cartList.length === 0 ? (
				<div className="emptyCart">
					<h3>
						El carrito está vacío, elija algún
						producto para comprar
					</h3>
					<Link to={"/"} className="btnProducts">
						Productos
					</Link>
				</div>
			) : (
				cartList.map((product) => (
					<Container fluid key={product.id}>
						<Row className="itemCart">
							<h4>{product.name}</h4>
							<Col
								md={1}
								className="cartContent"
							>
								<h5>
									cantidad:{" "}
									{
										product.quantity
									}
								</h5>
							</Col>

							<Col
								md={2}
								className="cartContent"
							>
								<h5>
									Precio: $
									{
										product.price
									}
								</h5>
							</Col>
							<Col
								md={2}
								className="cartContent"
							>
								<h5>
									Total: $
									{product.price *
										product.quantity}
								</h5>
							</Col>
							<Col
								md={2}
								className="cartContent"
							>
								<button
									className="btnCart"
									onClick={() =>
										removeItem(
											product.id
										)
									}
								>
									Eliminar
									del
									carrito
								</button>
							</Col>
						</Row>
					</Container>
				))
			)}

			<div className={`${cartList.length === 0 ? "hide" : ""} purchase`}>
				<button
					className="btnProducts"
					onClick={() => setModalShow(true)}
				>
					Finalizar compra
				</button>
				<div className="totalBuy">
					<h2>Total de la compra: $ {totalPrice()}</h2>
				</div>
			</div>

			{/* Formulario de compra */}
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				aria-labelledby="contained-modal-title-vcenter"
				size="lg"
				centered
				className="modalOrder"
				backdrop="false"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title className="text-center">
						<h1>Finalizá la compra</h1>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>
						Por favor completá los datos para que
						podamos coordinar la entrega
					</h4>
					<Container fluid className="modalForm">
						<form>Nombre y Apellido</form>
						<input
							name="name"
							type="text"
							value={order.buyer.name}
							onChange={handleOnChange}
							className="modalInput"
						/>
						<label>Teléfono</label>
						<input
							name="phone"
							type="number"
							value={order.buyer.phone}
							onChange={handleOnChange}
							className="modalInput"
						/>
						<label>Email</label>
						<input
							name="email"
							type="email"
							value={order.buyer.email}
							onChange={handleOnChange}
							className="modalInput"
						/>
						<label>Reingresar email</label>
						<input
							name="email2"
							type="email"
							value={email2}
							onChange={handleOnChangeMail2}
							className="modalInput"
						/>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<button
						onClick={() => setModalShow(false)}
						className="btnProducts btnCancel"
					>
						Cancelar
					</button>
					<button
						onClick={createOrder}
						className="btnProducts"
					>
						Comprar
					</button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default CartContainer;
