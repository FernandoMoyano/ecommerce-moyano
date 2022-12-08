
import { Link } from "react-router-dom";
import "./Item.css";

const Item =  ({ id, name, img, price, }) =>{
	return (
		<Link to={`/detail/${id}`}>
			<article className="CardItem">
				<header className="CardHeader">
					<h2 className="ItemHeader">{name}</h2>
				</header>
				<picture>
					<img src={img} alt={name} className="ItemImg" />
				</picture>
				<section>
					<h3 className="Info">{price}</h3>
				</section>
				<footer className="ItemFooter">
					<div className="Option">View</div>
				</footer>
			</article>
		</Link>
	);
};

export default Item;
