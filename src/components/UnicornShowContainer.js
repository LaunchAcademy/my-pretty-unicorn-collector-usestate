import React, { useEffect, useState } from 'react'

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({})

  const unicornId = props.match.params.id

  const fetchOneUnicorn = async () => {
    const response = await fetch(`/api/v1/unicorns/${unicornId}`)
    const parsedSingleUnicornObject = await response.json()
    setUnicornData(parsedSingleUnicornObject)
  }

  useEffect(() => {
    fetchOneUnicorn()
  }, [])

  return(
    <div>
      <h4> Hello from Show </h4>
        {unicornData.unicornName}
      <br/>
        {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornShowContainer
