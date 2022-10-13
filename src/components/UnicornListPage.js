import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornList from "./UnicornList"
import UnicornForm from "./UnicornForm"

const UnicornListPage = () => {

  const [unicorns, setUnicorns] = useState([])

  const fetchUnicorns = async () => {
    try {
      const response = await fetch("/api/v1/unicorns")
      if (!response.ok) {
        const newError = new Error(`${response.status} (${response.statusText})`)
        throw(newError)
      }
      const responseBody = await response.json()
      // debugger
      setUnicorns(responseBody)
    } catch(err) {
      console.log(`Error in fetch: ${err.message}`);
    }
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  const addNewUnicornToApp = async (unicornFormFields) => {
    // take the data from the form, and add it to state
    // debugger
    // POST fetch
    try {
      const response = await fetch("/api/v1/unicorns", {
        method: "POST",
        headers: {
          'content-type': "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(unicornFormFields)
      })
      if (!response.ok) {
        const newError = new Error(`${response.status} (${response.statusText})`)
        throw(newError)
      }
      const responseBody = await response.json()
      // debugger
      setUnicorns([
        ...unicorns,
        responseBody
      ])
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`);
    }
  }

  return(
    <div>
      <UnicornForm
        addNewUnicornToApp={addNewUnicornToApp}
      />

      <UnicornList
        unicorns={unicorns}
      />
    </div>
  )
}

export default UnicornListPage
