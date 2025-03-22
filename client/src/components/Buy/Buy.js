import React, { useContext } from "react";
import { itemContext } from "../../context/ItemContext";
import "./Buy.css"; // Import the CSS file

const Buy = () => {
    const { cart, itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">🛒 Checkout Summary</h2>

            <div className="checkout-info">
                <p>Total Items: <span className="highlight">{itemsInCart}</span></p>
                <p>Total Amount: <span className="highlight">₹{totalPrice}</span></p>
            </div>

            <div className="book-list">
                <h3>Books in Cart:</h3>
                <ol>
                    {cart.map((prod, index) => (
                        <li key={index} className="book-item">{prod.title}</li>
                    ))}
                </ol>
            </div>

            <button className="checkout-button">Proceed to Payment</button>
        </div>
    );
};

export default Buy;
