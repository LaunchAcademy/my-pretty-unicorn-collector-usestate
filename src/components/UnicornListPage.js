import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornList"
import UnicornForm from "./UnicornForm"

const UnicornListPage = () => {

  const [unicorns, setUnicornObjects] = useState([])

  const addNewUnicornToApp = (unicornFormFields) => {
    // take the data from the form, and add it to state
  }

  return(
    <div>
      <UnicornForm
      />

      <UnicornIndexContainer
        unicorns={unicorns}
      />
    </div>
  )
}

export default UnicornListPage
