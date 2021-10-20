import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicorns] = useState([])

  const fetchUnicorns = async () => {
    const response = await fetch("/api/v1/unicorns")
    const parsedUnicornArray = await response.json()
    setUnicorns(parsedUnicornArray)
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])


  const addNewUnicornToApp = async (unicornFormFields) => {

    const response = await fetch("/api/v1/unicorns", { 
      method: "POST",
      body: JSON.stringify(unicornFormFields)
    })
    const parsedUnicornResponse = await response.json()
    
    setUnicorns([...unicorns, parsedUnicornResponse])
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
