import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { itemContext } from "../../context/ItemContext";
import './Header.css';

const Header = ({ component, setComponent }) => {
	const { itemsInCart, totalPrice } = useContext(itemContext);

	return (
		<div className="header-container">
			<div className="header-top">
				<h1 className="logo" onClick={() => setComponent('productlist')}>📚 Book Library</h1>
				<div className="cart-section">
					<span className="cart-text">Total: ₹{totalPrice}</span>
					<div className="cart-icon" onClick={() => setComponent('itemcart')}>
						<span className="cart-count">{itemsInCart}</span>
						<FontAwesomeIcon icon={faCartShopping} size="2x" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
