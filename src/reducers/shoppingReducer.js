import { TYPES } from '../actions/shoppingActions';




// Estado inicial del carrito de compras
export const initialState = {
  cart: [],
}

export const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      return
    }
    
    case TYPES.REMOVE_ONE_FROM_CART: {
      return
    }
      
    case TYPES.REMOVE_ALL_FROM_CART: {
      return
    }
      
    case TYPES.CLEAR_CART: {
      return
    }
  
    default:
      return state;
  }
}

