import React, { useState } from 'react'

const UnicornFormContainer = (props) => {

  const [formFields, setFormFields] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleFieldChange = (event) => {
    const fieldThatWasTypedInto = event.currentTarget.name 
    const whatTheUserTyped = event.currentTarget.value

    setFormFields({ 
      ...formFields,
      [fieldThatWasTypedInto]: whatTheUserTyped}
    )
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    props.addNewUnicornToApp(formFields)
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
            />
        </label>

        <label> Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            onChange={handleFieldChange}
          />
        </label>
        
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
