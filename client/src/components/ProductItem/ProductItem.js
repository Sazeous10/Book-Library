import React, { useContext } from "react";
import { itemContext } from "../../context/ItemContext";
import "./ProductItem.css"; // Import the CSS file

const ProductItem = ({ product }) => {
	const { addToCart, removeFromCart, cart} = useContext(itemContext);

	return (
		<div className="product-card">
			<img
				className="product-image"
				src={product.image}
				alt={product.name}
			/>

			<div className="product-details">
				<h3 className="product-title">{product.name}</h3>
				<p className="product-description">{product.description}</p>
				<p className="product-price">₹{product.price}</p>
				<p className="product-genre">{product.genre}</p>
				<p className="product-author">{product.author}</p>

				<div className="button-group">
					<button className="add-btn" onClick={() => addToCart(product)}>
						Add to Cart
					</button>

					<button className="remove-btn" onClick={() => removeFromCart(product)}>
						Remove from Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
