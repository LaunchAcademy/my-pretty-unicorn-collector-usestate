import React, { useState, useEffect } from 'react';

import TextField from "../components/TextField"

const UnicornFormContainer = (props) => {
  const [newUnicorn, setNewUnicorn] = useState({
    unicornName: "",
    description: ""
  })

  const handleFieldChange = (event) => {
    let fieldName = event.currentTarget.name
    let userInput = event.currentTarget.value
    
    setNewUnicorn({
      ...newUnicorn,
      [fieldName]: userInput
    })
  }

  const handleUnicornSubmit = (event) => {
    event.preventDefault()

    props.addNewUnicorn(newUnicorn)
  }

  return(
    <div className='page border'>
      <h1>Add Your Favorite Unicorn</h1>
        <form onSubmit={handleUnicornSubmit}>
          <label> Name: </label>
          <TextField
            fieldName={unicornName}
            content={state.unicornName}
            handleChange={handleUnicornNameChange}
          />

          <label> Description: </label>
          <TextField
            fieldName={}
            content={state.description}
            handleChange={handleDescriptionChange}
          />

          <input type="submit"/>
        </form>
    </div>
  )
}

export default UnicornFormContainer;
