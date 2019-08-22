import React, { useState, useEffect } from 'react';

import { Redirect } from "react-router-dom"

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

const UnicornPageContainer = (props) => {
  const [unicorns, setUnicorns] = useState([])
  const [redirectStatus, setRedirectStatus] = useState({
    status: false,
    id: null
  })


  const addNewUnicorn = (unicornObject) => {
    console.log(unicornObject)
    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(unicornObject)
    })
    .then(response => response.json())
    .then((newUnicornObject) => {
      setRedirectStatus({
        status: true,
        id: newUnicornObject.id
      })
      // setUnicorns([...unicorns, newUnicornObject])
      // render a Redirect component


    })
  }

  useEffect(() => {
    fetch("/api/v1/unicorns")
    .then(response => response.json())
    .then((unicornsResponse) => {
      setUnicorns(unicornsResponse)
    })
  }, [])

  if (redirectStatus.status) {
    return(
      <Redirect
        to={`/unicorns/${redirectStatus.id}`}
      />
    )
  } else {
    return(
      <div className='page'>
        <UnicornFormContainer
          addNewUnicorn={addNewUnicorn}
        />

        <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages4.alphacoders.com%2F102%2F102646.jpg&f=1"/>

        <UnicornIndexContainer
          unicorns={unicorns}
        />
      </div>
    )
  }
}

export default UnicornPageContainer;
