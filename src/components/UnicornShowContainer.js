import React, { useEffect, useState } from 'react'

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    id: "",
    unicornName: "",
    description: ""
  })

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/unicorns/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((unicornData) => {
      setUnicornData(unicornData)
    })

  }, [])

  return(
    <div>
      <h4> Hello from Show </h4>

      {unicornData.unicornName}
      <br/>
      {unicornData.description}
    </div>
  )
}

export default UnicornShowContainer
