import { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import { TYPES } from './actions/contadorActions'
import { contadorInitialState, contadorReducer } from './reducers/contadorReducer'


function App() {

  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState)


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
