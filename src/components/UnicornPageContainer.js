import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicorns] = useState([
    {unicornName: "foob"},
    {unicornName: "hardcoded"},
  ])

  useEffect(() => {
    debugger
  }, [])


  const addNewUnicornToApp = (unicornFormFields) => {

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
