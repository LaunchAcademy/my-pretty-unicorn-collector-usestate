import React, { useEffect, useState } from 'react'

const UnicornDetailsPage = (props) => {
  const [unicornData, setUnicornData] = useState(null)
 
  useEffect(() => {
   
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
