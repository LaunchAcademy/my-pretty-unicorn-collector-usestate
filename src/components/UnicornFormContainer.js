import React, { useState } from 'react'

const UnicornFormContainer = (props) => {
  const [unicornFormFields, setUnicornFormFields] = useState({
    unicornName: "",
    description: ""
  })

  const handleFieldChange = (event) => {
    return setUnicornFormFields({
      ...unicornFormFields,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    props.addNewUnicornToApp(unicornFormFields)
  }

  // const handleClearForm = (event) => {
  //   // event.preventDefault()
  //   setUnicornFormFields({unicornName: "", description: ""})
  // }

  console.log(unicornFormFields)
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
            name="description"
            onChange={handleFieldChange}
            value={unicornFormFields.description}
          />
        </label>
        <input type="submit" value="Add New Buddy"/>
      </form>
    </div>
  )
}

export default UnicornFormContainer
