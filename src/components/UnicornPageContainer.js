import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [getUnicornObjects, setUnicornObjects] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
      .then((responseObject) => {
        return responseObject.json()
      })
      .then((parsedUnicornsResponseBody) => {
        setUnicornObjects(parsedUnicornsResponseBody)
      })
  }, [])

  const addNewUnicornToApp = (unicornFormFields) => {
    // charlie should be here after submit
    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(unicornFormFields)
    })
    .then((response) => {
      return response.json()
    })
    .then((parsedUnicornBody) => {
      let newUnicornArray = getUnicornObjects.concat(parsedUnicornBody)
      setUnicornObjects(newUnicornArray)
    })
  }

  return(
    <div>
      <UnicornFormContainer
        addNewUnicornToApp={addNewUnicornToApp}
      />

      <UnicornIndexContainer
        unicorns={getUnicornObjects}
      />
    </div>
  )
}

export default UnicornPageContainer
