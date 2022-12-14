import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
	return (
		<header className="header">
			<NavLink clas to="/">
				<div className="icon">
				<img className="icon-brand" src="https://cdn-icons-png.flaticon.com/512/3577/3577005.png"></img>
					<h1>TODO-TECH</h1>
				</div>
			</NavLink>
			<nav className="nav-container">
				<ul>
					<li>
						<NavLink to="/category/placas de video">
							Placas de video
						</NavLink>
					</li>
					<li>
						<NavLink to="/category/monitores">
							Monitores
						</NavLink>
					</li>
					<li>
						<NavLink to="category/butacas">
							Butacas
						</NavLink>
					</li>
					<li>
						<NavLink to="cart">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
