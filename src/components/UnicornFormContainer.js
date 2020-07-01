import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFormFields, setUnicornFormFields] = useState({})

  const handleFieldChange = (event) => {
    // track potential changes to all form fields
  }

  const handleFormSubmit = (event) => {
    // pass our unicorn information up to the PageContainer, to be persisted with fetch
  }

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
            name="unicornDescription"
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
