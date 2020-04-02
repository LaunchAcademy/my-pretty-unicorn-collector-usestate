import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicorns] = useState([])

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then((response) => {
      return response.json()
    })
    .then((unicornsData) => {
      setUnicorns(unicornsData)
    })
  }, [])

  const addNewUnicornToApp = (unicornFormFields) => {
    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(unicornFormFields)
    })
    .then((response) => {
      return response.json()
    })
    .then((newUnicorn) => {
      setUnicorns([...unicorns, newUnicorn])
    })
  }

  return(
    <div>
      <UnicornFormContainer
        addNewUnicornToApp={addNewUnicornToApp}
      />
      <UnicornIndexContainer
        unicorns={unicorns}
      />
    </div>
  )
}

export default UnicornPageContainer
