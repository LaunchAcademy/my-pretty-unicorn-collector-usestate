import React, { useState, useEffect } from 'react';

const UnicornShowContainer = (props) => {
  const [unicornRecord, setUnicornRecord] = useState({
    id: null,
    unicornName: "",
    description: ""
  })

  useEffect(() => {
    fetch(`/api/v1/unicorns/${props.match.params.id}`)
    .then(response => response.json())
    .then((featuredUnicorn) => {
      setUnicornRecord(featuredUnicorn)
    })
  }, [])


  return(
    <div className='page'>
      <h1> Show Page </h1>
      <h4> {unicornRecord.unicornName} </h4>

      <br/>
      <p>
        Unicorn Description: {unicornRecord.description}
      </p>
    </div>
  )
}

export default UnicornShowContainer;
