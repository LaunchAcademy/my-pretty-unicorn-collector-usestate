import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import * as yup from 'yup';
// import 'core-js';

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = () => {
  const [getUnicornObjects, setUnicornObjects] = useState([])
  let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url()
});

// you can try and type cast objects to the defined schema

let bar = schema.cast({
  age: '-24',
  createdOn: '2014-09-23T19:25:25Z',
});

 
  async function start() {

    const result = await schema.isValid(bar);
    console.log(result)
  }
  debugger

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
