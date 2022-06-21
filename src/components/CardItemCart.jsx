import React from "react";

const CardItemCart = ({item, deleteFromCart}) => {
	const {id, name, price, quantity} = item;

	return (
		<div className='item'>
      <h4>{name}</h4>
      <h5>${price},<small>00</small></h5>
			<button onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
			<button onClick={() => deleteFromCart(id)}>Eliminar Todo</button>
		</div>
	);
};

export default CardItemCart;
