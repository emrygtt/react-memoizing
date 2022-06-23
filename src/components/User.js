import React from 'react'

const User = ({
  data
}) => {


  console.log("User component rerendered")


  return (
    <div>
      userData
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default React.memo(User)