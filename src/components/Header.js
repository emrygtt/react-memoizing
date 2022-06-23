import React from 'react'

const Header = ({
  increment
}) => {

  console.log("Header component rerendered")

  return (
    <div>
      Header
      <button onClick={increment}>
        Increase
      </button>
    </div>
    
  )
}

export default React.memo(Header)