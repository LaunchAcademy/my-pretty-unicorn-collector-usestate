import React, { useState } from 'react'

const UnicornForm = (props) => {
 

  const handleFormSubmit = () => {

  }

  return(
    <div>
      <h1> Unicorn Form </h1>

      <form onSubmit={handleFormSubmit}>
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

export default UnicornForm
