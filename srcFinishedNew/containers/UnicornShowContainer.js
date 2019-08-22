import React, { useState, useEffect } from 'react';

const UnicornShowContainer = (props) => {
  const [unicornRecord, setUnicornRecord] = useState({})

  useEffect(() => {
    let id = props.match.params.id
    fetch(`/api/v1/unicorns/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((unicornBody) => {
      setUnicornRecord(unicornBody)
    })
  })

  return(
    <div className='page'>
      <h1> Show Page </h1>
      {unicorn.unicornName}
      <br/>
      {unicorn.description}
    </div>
  )
}

export default UnicornShowContainer;
