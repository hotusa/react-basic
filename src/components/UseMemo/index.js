import React, { useState, useMemo } from 'react';

export default () => {

  const [ count, setCount ] = useState(0);
  const [ otherCount, setOtherCount ] = useState(0);

  function calculate(valor) {
    console.log('calculando...')
    return valor;
  }

  const result = useMemo(() => calculate(count), [ count ]);
  //const result = calculate(count);

  return (
    <div>
      <h1>UseMemo</h1>
      <p>useMemo solo volverá a calcular el valor memorizado cuando una de las dependencias haya cambiado. Esta optimización ayuda a evitar cálculos costosos en cada render.</p>

      <button onClick={ () => setCount(count + 1) }> count: { result }</button>
      <button onClick={ () => setOtherCount(otherCount + 1) }>Other count: { otherCount }</button>

    </div>
  )
}