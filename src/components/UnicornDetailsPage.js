import React, { useEffect, useState } from 'react'

const UnicornDetailsPage = (props) => {
  const [unicornData, setUnicornData] = useState({})
  // const unicornId = props.match.params.bananaId
  // console.log(unicornId)
  // debugger

  const fetchUnicornData = async () => {
    try {
      const unicornId = props.match.params.bananaId
      const response = await fetch(`/api/v1/unicorns/${unicornId}`)
      if (!response.ok) {
        const newError = new Error(`${response.status} (${response.statusText})`)
        throw(newError)
      }
      const responseBody = await response.json()
      // debugger
      setUnicornData(responseBody)
    } catch (err) {
      console.log(`Error in fetch: ${err.message}`);
    }
  }

  useEffect(() => {
    fetchUnicornData()
  }, [])

  return(
    <div>
      <h4> Unicorn Show Page </h4>
      {unicornData.unicornName}
      <br/>
      {unicornData.unicornDescription}
    </div>
  )
}

export default UnicornDetailsPage
