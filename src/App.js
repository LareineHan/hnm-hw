import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './page/Products';
import Signup from './page/Signup';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

function App() {
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [authenticate, setAuthenticate] = useState(false);

	useEffect(() => {
		console.log('useEffect authenticate is? ', authenticate);
	}, [authenticate]);

	return (
		<div className='App'>
			<Navbar setAuthenticate={setAuthenticate} authenticate={authenticate} />
			<Routes>
				<Route
					path='/'
					element={
						<Products
							authenticate={authenticate}
							selectedProduct={selectedProduct}
							setSelectedProduct={setSelectedProduct}
						/>
					}></Route>
				<Route
					path='/signup'
					element={<Signup setAuthenticate={setAuthenticate} />}></Route>
				<Route
					path='/product/:id'
					element={<PrivateRoute authenticate={authenticate} />}></Route>
			</Routes>
		</div>
	);
}

export default App;
