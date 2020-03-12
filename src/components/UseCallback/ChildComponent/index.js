import React, { useState, useEffect } from 'react';

export default ({ action }) => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('[Child] useEffect');
    let val = action()
    setValue(val)
  }, [action])

  return (
    <div>Child : {value}</div>
  )
}