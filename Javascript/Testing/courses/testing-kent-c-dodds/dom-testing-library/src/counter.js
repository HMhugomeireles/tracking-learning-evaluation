import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  
  const increment = () => setCount(c => c + 1)
  
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  )
}

export default Counter;