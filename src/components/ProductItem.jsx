import React from "react";

const ProductItem = ({product, addTocart}) => {
	return (
		<div style={{border: "solid 1px white", padding:"1rem"}}>
			<h4>{product.name}</h4>
			<p>{product.description}</p>
			<p>
				${product.price}, <small>00</small>
      </p>
      <button onClick={() => addTocart(product.id)}>Agregar</button>
		</div>
	);
};

export default ProductItem;
