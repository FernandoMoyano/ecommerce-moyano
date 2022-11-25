import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"


const NavBar = () => {

	return (
		<header className="header">
		<h1>TODO-TECH</h1>
			<nav className="nav-container">
				<ul>
					<li>
						<a>Placas de video</a>
					</li>
					<li>
						<a>Monitores</a>
					</li>
					<li>
						<a>Butacas</a>
					</li>
				</ul>
				<CartWidget/>
			</nav>
		</header>
	);
};

export default NavBar;
