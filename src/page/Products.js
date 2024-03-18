import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const Products = () => {
	const [productList, setProductList] = useState([]); // productList를 state로 만들어준다.
	const getProducts = async () => {
		let url = 'http://localhost:5000/products';
		let res = await fetch(url);
		let data = await res.json();
		setProductList(data); // setProductList에 data를 넣어준다.
	};

	useEffect(() => {
		getProducts();
		console.log('Product page (useEffect)');
		console.log(productList);
	}, []);

	return (
		<div>
			<Container>
				<Row>
					{productList.map((item) => (
						<Col lg={4} key={item.id}>
							<ProductCard item={item} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default Products;
