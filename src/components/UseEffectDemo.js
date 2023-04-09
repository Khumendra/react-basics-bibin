import React, { useEffect, useState } from 'react'

const UseEffectDemo = ({ count }) => {
  const [msg, setMsg] = useState(0);

  useEffect(() => {
    setMsg(`count is ${count}`)
    console.log(`Effect Run...`);
  }, [count]);


  return (
    <div>
      {msg}
      <div>UseEffect</div>
    </div>
  )
}

export default UseEffectDemo;