import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFormFields, setUnicornFormFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleFieldChange = (event) => {
    setUnicornFormFields({
      ...unicornFormFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    props.addNewUnicornToApp(unicornFormFields)
  }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
        <label> Unicorn Name:
          <input
            type="text"
            name="unicornName"
            onChange={handleFieldChange}
            value={unicornFormFields.unicornName}
          />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={handleFieldChange}
            value={unicornFormFields.unicornDescription}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
