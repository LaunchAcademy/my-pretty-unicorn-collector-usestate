import React, { useState, useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import UnicornList from "./UnicornList"
import UnicornForm from "./UnicornForm"

const UnicornListPage = () => {
  const [unicorns, setUnicornObjects] = useState([])

  const addNewUnicornToApp = async (unicornFormFields) => {
    // take the data from the form, and add it to state
    // debugger
    try {
      const response = await fetch("/api/v1/unicorns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(unicornFormFields)
      })

      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      // debugger
      setUnicornObjects([...unicorns, responseBody])
    } catch (error) {
      console.log("error in fetch:", error)
    }
  }

  const fetchUnicorns = async () => {
    try {
      const response = await fetch("/api/v1/unicorns")
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      // debugger
      setUnicornObjects(responseBody)
    } catch (error) {
      console.log("error in fetch:", error)
    }
  }

  useEffect(() => {
    fetchUnicorns()
  }, [])

  return (
    <div>
      <UnicornForm addNewUnicornToApp={addNewUnicornToApp} />

      <UnicornList unicorns={unicorns} />
    </div>
  )
}

export default UnicornListPage
