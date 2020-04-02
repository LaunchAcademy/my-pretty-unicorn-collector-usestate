import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {


  const addNewUnicornToApp = (unicornFormFields) => {

  }

  return(
    <div>
      <UnicornFormContainer
        addNewUnicornToApp={addNewUnicornToApp}
      />
      <UnicornIndexContainer
      />
    </div>
  )
}

export default UnicornPageContainer
