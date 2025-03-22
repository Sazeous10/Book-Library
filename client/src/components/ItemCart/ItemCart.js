import React, { useContext, useEffect, useState } from "react";
import { itemContext } from "../../context/ItemContext";
import ProductItem from "../ProductItem/ProductItem";
import "./ItemCart.css"

const ItemCart = ({ component, setComponent }) => {
    const { cart } = useContext(itemContext);

    return(
        <div className="product-list-container" style={{marginTop:'70px'}}>
            <h2 className="product-list-title">My Cart</h2>
            <ul className="product-grid">
				{cart.map((product) => (
					<ProductItem key={product._id} product={product} />
				))}
			</ul>
            <div className="buy-now-container">
				<button className="buy-now-btn" onClick={() => setComponent('buy')}>Buy Now</button>
			</div>
        </div>
    )
}

export default ItemCart