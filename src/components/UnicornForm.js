import React, { useState } from 'react'

const UnicornForm = (props) => {
  const [newUnicornData, setNewUnicornData] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleChange = (event) => {
    
    // console.log(event.currentTarget.value)
    setNewUnicornData({
      ...newUnicornData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // debugger
    props.addNewUnicornToApp(newUnicornData)
    setNewUnicornData({
      unicornName: "",
      unicornDescription: ""
    })
  }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            value={newUnicornData.unicornName}
            onChange={handleChange}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            value={newUnicornData.unicornDescription}
            onChange={handleChange}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornForm
