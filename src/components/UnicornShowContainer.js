import React, { useEffect, useState } from 'react'

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({})

  useEffect(() => {
    // definie a future fetch call for just one unicorn, given a prop/param
  }, [])

  return(
    <div>
      <h4> Hello from Show </h4>

      <br/>
    </div>
  )
}

export default UnicornShowContainer
