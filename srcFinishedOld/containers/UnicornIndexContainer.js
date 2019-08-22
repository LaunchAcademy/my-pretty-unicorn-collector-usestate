import React from 'react';
import UnicornTile from '../components/UnicornTile';

class UnicornIndexContainer extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let unicorns = this.props.unicorns.map(unicorn => {
      return(
        <UnicornTile
          key={unicorn.id}
          unicorn={unicorn}
        />
      )
    })

    return(
      <div className='page border'>
        <h1>Unicorn Index Container</h1>
        <div className='unicorn-list'>
          {unicorns}
        </div>
      </div>
    )
  }
}

export default UnicornIndexContainer;
