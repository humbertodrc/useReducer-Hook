import { useReducer } from "react";
import { TYPES } from '../actions/contadorActions';
import { contadorInitialState, contadorReducer } from '../reducers/contadorReducer';


const ContadorMejorado = () => {

  const [state, dispatch] = useReducer(contadorReducer, contadorInitialState)


  const sumar = () => dispatch({ type: TYPES.INCREMENTAR })

  const sumar5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 })

  const restar = () => dispatch({ type: TYPES.DECREMENTAR })

  const restar5 = () => dispatch({ type: TYPES.DECREMENTAR_5, payload: 5 })

  const reset = () => dispatch({ type: TYPES.RESET })

	return (
		<div>
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
		</div>
	);
};

export default ContadorMejorado;
