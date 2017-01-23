import React, { PropTypes } from 'react';

const DropdownItem = ({item, onItemClicked}) =>
  <li onClick={() => onItemClicked(item)}>{item}</li>;

DropdownItem.propTypes = {
  item: PropTypes.string.isRequired,
  onItemClicked: PropTypes.func.isRequired
};

export default DropdownItem;