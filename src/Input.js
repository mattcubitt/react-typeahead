import React, { PropTypes } from 'react';

const Input = ({onInputChanged, inputText}) =>
  <input type="text"
         onChange={event => onInputChanged(event.target.value)}
         value={inputText}
         />;

Input.propTypes = {
  onInputChanged: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired
};

export default Input;