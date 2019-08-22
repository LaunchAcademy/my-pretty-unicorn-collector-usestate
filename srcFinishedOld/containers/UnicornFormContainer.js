import React from 'react';

import TextField from "../components/TextField"

class UnicornFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      unicornName: "",
      description: "",
    }
    this.handleUnicornNameChange = this.handleUnicornNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleUnicornSubmit = this.handleUnicornSubmit.bind(this)
  }

  handleUnicornNameChange(event){
    let userInput = event.target.value
    this.setState({ unicornName: userInput })
  }

  handleDescriptionChange(event){
    let userInput = event.target.value
    this.setState({ description: userInput })
  }

  // handleFieldChange(event){
  //   let userInput = event.target.value
  //   let inputName = event.target.name
  //   this.setState({ [inputName]: userInput })
  // }

  handleUnicornSubmit(event){
    event.preventDefault()

    let newUnicornFormPayload = {
      unicornName: this.state.unicornName,
      description: this.state.description
    }

    this.props.addNewUnicorn(newUnicornFormPayload)
  }

  render() {
    console.log(this.state)
    return(
      <div className='page border'>
        <h1>Add Your Favorite Unicorn</h1>
          <form onSubmit={this.handleUnicornSubmit}>
            <label> Name: </label>
            <TextField
              content={this.state.unicornName}
              handleChange={this.handleUnicornNameChange}
            />

            <label> Description: </label>
            <TextField
              content={this.state.description}
              handleChange={this.handleDescriptionChange}
            />

            <input type="submit"/>
          </form>
      </div>
    )
  }
}

export default UnicornFormContainer;
