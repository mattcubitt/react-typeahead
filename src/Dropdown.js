import React, { PropTypes } from 'react';
import DropdownItem from './DropdownItem';

const Dropdown = ({items, onItemClicked, showDropdown}) =>{
  if(!showDropdown) {
    return (<ul></ul>);
  }

  //changed
  return (
    <ul>
      {
        items.map(item => <DropdownItem
          onItemClicked={onItemClicked}
          key={item.CompanyNumber}
          item={item.Name}
        />)
      }
    </ul>
  )
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClicked: PropTypes.func.isRequired
};

export default Dropdown;