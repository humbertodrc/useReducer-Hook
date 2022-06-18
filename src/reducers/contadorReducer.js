import { TYPES } from '../actions/contadorActions'

// Estado inicial
export const contadorInitialState = {
  count: 0,
}

// reducer actualiza el estado segun el action que se le pase y el payload por medio del dispatch
export function contadorReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENTAR:
      return { count: state.count + 1 }
    
    case TYPES.INCREMENTAR_5:
      return { count: state.count + action.payload }
    
    case TYPES.DECREMENTAR:
      return { count: state.count - 1 }
    
    case TYPES.DECREMENTAR_5:
      return { count: state.count - action.payload }
    
    case TYPES.RESET:
      return contadorInitialState
    
    default:
      return state
  }
}