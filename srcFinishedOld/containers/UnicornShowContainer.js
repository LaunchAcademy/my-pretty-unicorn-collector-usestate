import React from 'react';

class UnicornShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      unicorn: {}
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id
    fetch(`/api/v1/unicorns/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((unicornBody) => {
      this.setState({ unicorn: unicornBody})
    })
  }


  render() {

    return(
      <div className='page'>
        <h1> Show Page </h1>
        {this.state.unicorn.unicornName}
        <br/>
        {this.state.unicorn.description}
      </div>
    )
  }
}

export default UnicornShowContainer;
