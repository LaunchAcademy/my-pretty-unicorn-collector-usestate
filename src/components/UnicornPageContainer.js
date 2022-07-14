import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {

  const [unicorns, setUnicornObjects] = useState([])

  const addNewUnicornToApp = (unicornFormFields) => {
    // take the data from the form, and add it to state
  }

  return(
    <div>
      <UnicornFormContainer
      />

      <UnicornIndexContainer
        unicorns={unicorns}
      />
    </div>
  )
}

export default UnicornPageContainer
