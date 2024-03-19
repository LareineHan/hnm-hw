import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
	const [productList, setProductList] = useState([]); // productList를 state로 만들어준다.
	const [query, setQuery] = useSearchParams(); // query를 state로 만들어준다.
	const getProducts = async () => {
		let searchQuery = query.get('q') || '';
		console.log('searchQuery ?? ', searchQuery);
		let url = `https://my-json-server.typicode.com/lareinehan/hnm-hw/products?q=${searchQuery}`;
		let res = await fetch(url);
		let data = await res.json();
		setProductList(data); // setProductList에 data를 넣어준다.
	};

	useEffect(() => {
		getProducts();
	}, [query]);

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
