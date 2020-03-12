import React, { useRef, useLayoutEffect, useEffect } from "react";

export default function ColoredComponent({ color }) {

  const ref = useRef();

  useLayoutEffect(() => {
    const refColor = ref.current.style.color;
    console.log('useLayoutEffect...' + refColor);
    ref.current.style.color = "red";
  }, [ color ]);

  useEffect(() => {
    const refColor = ref.current.style.color;
    console.log('useEffect...' + refColor);
  }, [color]);

  return (
    <div ref={ ref } style={ { color: color } }>
      Hello !
    </div>
  );
}