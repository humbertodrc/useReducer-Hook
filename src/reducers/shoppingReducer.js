import {TYPES} from "../actions/shoppingActions";
import {products} from "../data/products";

// Estado inicial del carrito de compras
export const initialState = {
	cart: [],
};

export const shoppingReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.ADD_TO_CART: {
			// Buscamos el producto nuevo para agregarlo al carrito
			let newItem = products.find((item) => item.id === action.payload);
			// Validamos si ese producto nuevo ya esta en el carrito
			let itemInCartValidate = state.cart.find(
				(item) => item.id === newItem.id
			);

			// Si el producto nuevo ya esta en el carrito, hacemos el condicional del return
			return itemInCartValidate
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem.id
								? {...item, quantity: item.quantity + 1}
								: item
						), // Si el item ya está en el carrito, se suma 1 a la cantidad
				  }
				: {
						...state,
						cart: [...state.cart, {...newItem, quantity: 1}], //la primera vez que lo agrego le creo la propeidad quantity: 1
				  };
		}
		case TYPES.REMOVE_ONE_FROM_CART: {
			// Buscamos el producto que queremos eliminar
			let deleteItem = state.cart.find((item) => item.id === action.payload);
			return deleteItem.quantity === 1
				? {
						...state,
						cart: state.cart.filter((item) => item.id !== action.payload),
				  }
				: {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload
								? {...item, quantity: item.quantity - 1}
								: item
						),
				  };
		}

		case TYPES.REMOVE_ALL_FROM_CART: {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		}

		case TYPES.CLEAR_CART: {
			return initialState;
		}

		default:
			return state;
	}
};
