import React from 'react';

import UnicornIndexContainer from "./UnicornIndexContainer"
import UnicornFormContainer from "./UnicornFormContainer"

class UnicornPageContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      unicorns: []
    }
    this.addNewUnicorn = this.addNewUnicorn.bind(this)
  }

  componentDidMount(){
    fetch("/api/v1/unicorns")
    .then((response) => {
      return response.json()
    })
    .then((unicornBody) => {
      this.setState({ unicorns: unicornBody})
    })
    .catch(() => {
      console.log("Yo dawg and error is up in your code.")
    })
  }

  addNewUnicorn(newUnicornFormPayload){

    fetch("/api/v1/unicorns", {
      method: "POST",
      body: JSON.stringify(newUnicornFormPayload)
    })
    .then(response => response.json())
    .then(newlyCreatedUnicorn => {
      this.setState({ unicorns: this.state.unicorns.concat(newlyCreatedUnicorn) })
    })
    // take in data from the form
    // make a post request
    // add newly created unicorn to unicorns state
    // this.setState(unicorns: this.state.unicorns.concat())
  }

  render() {

    return(
      <div className='page'>
        <UnicornFormContainer
          addNewUnicorn={this.addNewUnicorn}
        />
        <UnicornIndexContainer
          unicorns={this.state.unicorns}
        />
      </div>
    )
  }
}

export default UnicornPageContainer;
