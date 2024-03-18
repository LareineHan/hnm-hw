import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../styles/ProductDetail.css';
const ProductDetail = () => {
	let { id } = useParams();
	let [data, setData] = useState({});
	let productImg = data.img;
	let productTitle = data.title;
	let productPrice = data.price;
	let isNew = data.new;
	let isChoice = data.choice;
	let sizeOptions = data.size;
	const getProductDetail = async () => {
		let url = `http://localhost:5000/products/${id}`;
		let res = await fetch(url);
		let data = await res.json();
		setData(data);
		console.log('Product detail data', data, 'id', id, 'title', data.title);
	};
	useEffect(() => {
		getProductDetail();
	}, []);

	return (
		<div>
			<Container className='detail-product-container'>
				<div className='detail-product-img'>
					<img src={productImg} alt='product' />
				</div>
				<div className='detail-description-area'>
					<h2 className='detail-product-title'>{productTitle}</h2>
					<div className='detail-product-price'>{productPrice} KRW</div>
					<div className='detail-is-new'>
						{isNew === true ? 'New Arrival' : ''}
					</div>
					<div className='detail-is-choice'>
						{isChoice === true ? 'Conscious choice' : ''}
					</div>
					<select name='detail-size' id='size'>
						<option value=''>Select Size</option>
						{sizeOptions?.map((size) => (
							<option value={size}>{size}</option> // sizeOptions가 있을 때만 실행
							// 여기에 default SELECT라는 option 맨 위에 추가하기. -> 어떻게?
						))}
					</select>
				</div>
			</Container>
		</div>
	);
};
export default ProductDetail;
