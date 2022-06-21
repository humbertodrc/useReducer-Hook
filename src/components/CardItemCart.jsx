import React from "react";

const CardItemCart = ({item, deleteFromCart}) => {
	const {id, name, price, quantity} = item;

	return (
		<div className="item">
			<h4>{name}</h4>
			<p>Precio:
				${price},<small>00</small>
			</p>
			<p>Cantidad: {quantity}</p>
			<p style={{fontWeight:"bold"}}>Total: ${quantity * price},<small>00</small></p>
			<div className="box-buttons">
				<button onClick={() => deleteFromCart(id)}>Eliminar Uno</button>
				<button onClick={() => deleteFromCart(id, true)}>Eliminar Todo</button>
			</div>
		</div>
	);
};

export default CardItemCart;
