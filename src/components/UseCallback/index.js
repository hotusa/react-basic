import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent'

export default () => {

  const [ count, setCount ] = useState(0);
  const [ otherCount, setOtherCount ] = useState(0);


  const myCallbackFunction = useCallback(()=>{
    return count;
  }, [ count ]);

  // const myCallbackFunction = ()=>{
  //   return count;
  // };


  return (
    <div>
      <h1>UseCallback</h1>
      <p> useCallback permite disponer de memorización y evitar que una función se vuelva a ejecutar si sus parámetros no han cambiado, devolviendo el valor almacenado o memorizado. Esto es especialmente útil para operaciones que tienen un elevado coste computacional o queremos controlar si un componente se vuelve a renderizar o no</p>

      <ChildComponent action={myCallbackFunction}/>

      <button onClick={ () => setCount(count + 1) }> Change callback count</button>
      <button onClick={ () => setOtherCount(otherCount + 1) }>Other count: { otherCount }</button>

    </div>
  )
}