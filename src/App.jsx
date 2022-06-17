import { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'

// Estado inicial
const initialState = {
  count: 0,
}

// types de los actions
const TYPES = {
  INCREMENTAR: 'INCREMENTAR',
  INCREMENTAR_5: 'INCREMENTAR_5',
  DECREMENTAR: 'DECREMENTAR',
  DECREMENTAR_5: 'DECREMENTAR_5',
  RESET:'RESET',
}


// reducer actualiza el estado segun el action que se le pase y el payload por medio del dispatch
function reducer(state, action) {
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
      return initialState
    
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)


  const sumar = () => dispatch({ type: TYPES.INCREMENTAR })

  const sumar5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 })

  const restar = () => dispatch({ type: TYPES.DECREMENTAR })

  const restar5 = () => dispatch({ type: TYPES.DECREMENTAR_5, payload: 5 })

  const reset = () => dispatch({ type: TYPES.RESET })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>useReducer</p>
        <p>{state.count}</p>
        <p>
          <button type="button" onClick={sumar}>
            +1
          </button>
          <button type="button" onClick={sumar5}>
            +5
          </button>
          <button type="button" onClick={restar}>
            -1
          </button>
          <button type="button" onClick={restar5}>
            -5
          </button>
          <button type="button" onClick={reset}>
            0
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
