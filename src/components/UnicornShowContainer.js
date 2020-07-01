import React, { useEffect, useState } from 'react'

const UnicornShowContainer = (props) => {
  const [unicornData, setUnicornData] = useState({
    unicornName: "",
    unicornDescription: ""
  })
 
  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/unicorns/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((parsedUnicorn) =>{
      setUnicornData(parsedUnicorn)
    })
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
