import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFormFields, setUnicornFormFields] = useState({})

  const handleFieldChange = (event) => {}

  const handleFormSubmit = (event) => {}

  // const handleClearForm = (event) => {
  //   // event.preventDefault()
  //   setUnicornFormFields({unicornName: "", description: ""})
  // }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form >
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"

          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="description"
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
