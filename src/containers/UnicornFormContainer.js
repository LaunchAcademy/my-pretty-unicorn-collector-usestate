import React, { useState, useEffect } from 'react';

import TextField from "../components/TextField"

const UnicornFormContainer = (props) => {

  const [unicornRecord, setUnicornRecord] = useState({
    unicornName: "",
    description: ""
  })

  const handleFieldChange = (event) => {
    let inputName = event.currentTarget.name
    let inputValue = event.currentTarget.value

    setUnicornRecord({
      ...unicornRecord,
      [inputName]: inputValue
    })
  }

  const handleUnicornFormSubmit = (event) => {
    event.preventDefault()

    props.addNewUnicorn(unicornRecord)
  }

  return(
    <div className='page border'>
      <h1>Add Your Favorite Unicorn</h1>

        <form onSubmit={handleUnicornFormSubmit}>
          <label> Name: </label>
          <TextField
            fieldName="unicornName"
            content={unicornRecord.unicornName}
            handleChange={handleFieldChange}
          />

          <label> Description: </label>
          <TextField
            fieldName="description"
            content={unicornRecord.description}
            handleChange={handleFieldChange}
          />

          <input type="submit"/>
        </form>
    </div>
  )
}

export default UnicornFormContainer;
