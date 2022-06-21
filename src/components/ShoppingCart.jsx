import React from "react";
import { products } from '../data/products';
import ProductItem from './ProductItem';

const ShoppingCart = () => {

  const addTocart = (id) => {
    console.log(id);
  }

  const deleteFromCart = (product) => {
    console.log(product.id);
  }

  const clearCart = () => {
    console.log('clear cart');
  }

	return (
		<div>
			<h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className='box grid-responsive'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} addTocart={addTocart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className='box'></article>
		</div>
	);
};

export default ShoppingCart;
