import React, {useReducer} from "react";
import {TYPES} from "../actions/shoppingActions";
import {products} from "../data/products";
import {initialState, shoppingReducer} from "../reducers/shoppingReducer";
import CardItemCart from "./CardItemCart";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
	const [state, dispatch] = useReducer(shoppingReducer, initialState);

	const {cart} = state;
	// console.log(cart);

	const addTocart = (id) => {
		// console.log(id);
		dispatch({type: TYPES.ADD_TO_CART, payload: id});
	};

	const deleteFromCart = (id, all = false) => {
		all
			? dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id})
			: dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
	};

	const clearCart = () => {
		dispatch({type: TYPES.CLEAR_CART});
	};

	return (
		<div>
			<h2>Carrito de Compras</h2>
			<h3>Productos</h3>
			<article className="box grid-responsive">
				{products.map((product) => (
					<ProductItem
						key={product.id}
						product={product}
						addTocart={addTocart}
					/>
				))}
			</article>
			<h3>Carrito</h3>
			<article className="cart">
				<button style={{margin: "1rem"}} onClick={clearCart}>
					Limpiar Carrito
				</button>
				{cart?.map((item) => (
					<CardItemCart
						key={item.id}
						item={item}
						deleteFromCart={deleteFromCart}
					/>
				))}
			</article>
		</div>
	);
};

export default ShoppingCart;
