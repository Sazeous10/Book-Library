import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { itemContext } from "../../context/ItemContext";
import "./ProductList.css";  // <-- Import CSS here

const ProductList = () => {
	const { products } = useContext(itemContext);
	const [sortedProducts, setSortedProducts] = useState([...products]);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(3000);
	const [selectedType, setSelectedType] = useState("all");

	useEffect(() => {
		setSortedProducts([...products]);
	}, [products]);

	const handleSortByPrice = () => {
		const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
		setSortedProducts(sorted);
	};

	const handleFilterByPriceRange = () => {
		const filtered = products.filter(
			(product) => product.price >= minPrice && product.price <= maxPrice
		);
		setSortedProducts(filtered);
	};

	const handleFilterByType = () => {
		if (selectedType === "all") {
			setSortedProducts([...products]);
		} else {
			const filtered = products.filter(
				(product) => product.genre === selectedType
			);
			setSortedProducts(filtered);
		}
	};

	return (
		<div className="product-list-container">
			<h2 className="product-list-title">Book Collection</h2>
			<div className="filter-bar">
				<button onClick={handleSortByPrice}>Sort by Price</button>
				<div className="filter-group">
					<label>Min Price</label>
					<input
						type="number"
						value={minPrice}
						onChange={(e) => setMinPrice(Number(e.target.value))}
					/>
				</div>
				<div className="filter-group">
					<label>Max Price</label>
					<input
						type="number"
						value={maxPrice}
						onChange={(e) => setMaxPrice(Number(e.target.value))}
					/>
				</div>
				<button onClick={handleFilterByPriceRange}>Filter by Price Range</button>
				<div className="filter-group">
					<label>Genre</label>
					<select
						value={selectedType}
						onChange={(e) => setSelectedType(e.target.value)}
					>
						<option value="all">All</option>
						<option value="Fiction">Fiction</option>
						<option value="Dystopian">Dystopian</option>
					</select>
				</div>
				<button onClick={handleFilterByType}>Filter by Type</button>
			</div>

			<ul className="product-grid">
				{sortedProducts.map((product) => (
					<ProductItem key={product._id} product={product} />
				))}
			</ul>

		</div>
	);
};

export default ProductList;
