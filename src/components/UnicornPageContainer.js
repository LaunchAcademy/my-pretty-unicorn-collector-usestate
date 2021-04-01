import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"


import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [unicorns, setUnicornObjects] = useState([])
  let schema = yup.object().shape({

});



  const addNewUnicornToApp = (unicornFormFields) => {
   
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
