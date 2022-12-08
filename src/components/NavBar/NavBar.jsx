import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const NavBar = () => {
	return (
		<header className="header">
			<NavLink clas to="/">
				<h1>TODO-TECH</h1>
			</NavLink>
			<nav className="nav-container">
				<ul>
					<li>
						<NavLink to='/category/placas de video'>
							Placas de video
						</NavLink>
					</li>
					<li>
						<NavLink to='/category/monitores'>
							Monitores
						</NavLink>
					</li>
					<li>
						<NavLink to='category/butacas'>
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
