import React, { useState } from "react"

const UnicornForm = (props) => {
  const [newUnicorn, setNewUnicorn] = useState({
    unicornName: "",
    unicornDescription: ""
  })

  const handleChange = (event) => {
    setNewUnicorn({
      ...newUnicorn,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    props.addNewUnicornToApp(newUnicorn)
  }

  return (
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
        <label>
          Unicorn Name:
          <input
            type="text"
            name="unicornName"
            value={newUnicorn.unicornName}
            onChange={handleChange}
          />
        </label>

        <label>
          Unicorn Description:
          <input
            type="text"
            name="unicornDescription"
            value={newUnicorn.unicornDescription}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Add New Buddy" />
      </form>
    </div>
  )
}

export default UnicornForm
