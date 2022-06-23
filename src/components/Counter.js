import React, { useCallback, useMemo, useState } from 'react'
import Header from './Header'
import User from './User'





const Counter = () => {

  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(1)
  const [name, setName] = useState("Ali")

  console.log("Counter component rerendered")


  // const userData = useMemo(() => {
  //   return {
  //     id: 1,
  //     name
  // }}
  // , [name])

  const increment = useCallback(() => {
    setCount((prev) => prev + amount)
  },[amount])

  return (
    <div>
      <Header increment={increment}/>
      {/* <User data={userData}/> */}
      <hr/>
      <h2>{count}</h2>
      <button onClick={increment}>
        Increase
      </button>
      <hr/>
      <button onClick={() => setName(name === 'Ali' ? "Emre" : "Ali")}>
        Set Name
      </button>


      <div>Amount : {amount}</div>
      <button onClick={() => setAmount(1)}>
        +1
      </button>
      <button onClick={() => setAmount(3)}>
        +3
      </button>
      <button onClick={() => setAmount(5)}>
        +5
      </button>
    </div>
  )
}

export default Counter