import React, { useEffect, useState } from "react"

const UnicornDetailsPage = (props) => {
  const [unicornData, setUnicornData] = useState({})

  const fetchUnicornData = async () => {
    const unicornId = props.match.params.id
    // console.log(props.match.params)
    try {
      const response = await fetch(`/api/v1/unicorns/${unicornId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      // debugger
      setUnicornData(responseBody)
    } catch (error) {
      console.log("error in fetch:", error)
    }
  }

  useEffect(() => {
    fetchUnicornData()
  }, [])

  return (
    <div>
      <h4> Unicorn Show Page </h4>
      {unicornData.unicornName}
      <br />
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornDetailsPage
