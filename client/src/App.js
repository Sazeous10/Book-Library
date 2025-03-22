import React, {useState} from 'react';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import './App.css';
import ItemContext from './context/ItemContext';
import ItemCart from './components/ItemCart/ItemCart';
import Buy from './components/Buy/Buy';

const App = () => {

	const [component, setComponent] = useState('productlist')

	return (
		<ItemContext>
			<Header component = {component} setComponent = {setComponent}/>
			{component === 'productlist' && <ProductList />}
			{component === 'itemcart' && <ItemCart component = {component} setComponent = {setComponent}/>}
			{component === 'buy' && <Buy />}
		</ItemContext>
	);
};

export default App;
