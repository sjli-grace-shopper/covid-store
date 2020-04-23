// import React, { useState, useEffect, Fragment } from 'react';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// import { AddCartItemButton, Breadcrumbs, ReviewList, Rating } from '.';
// import { fetchProducts } from '../store';

// export const SingleProduct = props => {
// 	const [ products, setProducts ] = useState([]);
// 	const dispatch = useDispatch();
// 	// const getProducts = () => {
// 	// 	dispatch(fetchProducts());
// 	// };
// 	const user = useSelector(state => state.user);
// 	const productList = useSelector(state => state.products.productList);

// 	useEffect(
// 		() => {
// 			dispatch(fetchProducts());
// 			setProducts(productList);
// 		},
// 		[ products.length ]
// 	);

// 	console.log('props', props);

// 	console.log('productList', productList);

// 	const product = products.find(product => product.id === +props.match.params.productId);

// 	if (Object.keys(products).length > 0)
// 		return (
// 			<Fragment className='single-product'>
// 				<div className={`${classes.root} single-product-row-1`}>
// 					<Breadcrumbs />
// 				</div>
// 				<div className='single-product-row-2'>
// 					<div className='single-product-row-2-left'>{product.image}</div>
// 					<div className='single-product-row-2-right'>
// 						<div className='single-product-row-2-right-row-1'>{product.name}</div>
// 						<div className='single-product-row-2-right-row-2'>
// 							<Rating />
// 						</div>
// 						<div className='single-product-row-2-right-row-3'>
// 							<AddCartItemButton />
// 						</div>
// 						<div className='single-product-row-2-right-row-4'>{product.description}</div>
// 					</div>
// 				</div>
// 				<div className='single-product-row-3'>
// 					<ReviewList rating={rating} product={product} />
// 				</div>
// 			</Fragment>
// 		);
// 	else return <div>hello</div>;
// };

// export default SingleProduct;
