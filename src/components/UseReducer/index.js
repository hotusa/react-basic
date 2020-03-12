import React, {useReducer} from 'react'

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return {...state, count: state.count + 1};
    case 'decrement': return {...state, count: state.count - 1};
    case 'reset': return {...state, count: action.payload};
    default: throw new Error('Unexpected action');
  }
};

export default () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>

      <h1>UseReducer</h1>
      <p>
        useReducer a menudo es preferible a useState cuando se tiene una lógica compleja que involucra múltiples subvalores o cuando el próximo estado depende del anterior.
        useReducer además te permite optimizar el rendimiento para componentes que activan actualizaciones profundas, porque puedes pasar hacia abajo dispatch en lugar de callbacks.
      </p>

      <p>{state.count}</p>
      <button onClick={() => dispatch({type: 'increment'})}>+1</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-1</button>
      <button onClick={() => dispatch({type: 'reset', payload: 0})}>reset</button>

    </div>
  )
}