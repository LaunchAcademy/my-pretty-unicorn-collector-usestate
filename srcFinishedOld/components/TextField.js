import React from 'react';

const TextField = props => {

  return(
    <input
      type="text"
      value={props.content}
      onChange={props.handleChange}
    />
  )
}

export default TextField;
