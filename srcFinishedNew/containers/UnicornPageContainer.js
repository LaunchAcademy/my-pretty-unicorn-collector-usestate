import React, { useState, useEffect } from 'react';

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = (props) => {
  const [unicorns, setUnicorns] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then((response) => {
      return response.json()
    })
    .then((unicornBody) => {
      setUnicorns(unicornBody)
    })
    .catch(() => {
      console.log("Yo dawg and error is up in your code.")
    })
  }, [])

  const addNewUnicorn = (newUnicornFormPayload) => {
    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(newUnicornFormPayload)
    })
    .then(response => response.json())
    .then(newlyCreatedUnicorn => {
      setUnicorns(unicorns.concat(newlyCreatedUnicorn))
    })
  }

  return(
    <div className='page'>
      <UnicornFormContainer
        addNewUnicorn={addNewUnicorn}
      />
      <UnicornIndexContainer
        unicorns={unicorns}
      />
    </div>
  )
}

export default UnicornPageContainer;
