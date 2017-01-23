import React, { Component } from 'react';
import Input from './Input';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { fetchItems, changeInputText } from './typeaheadActions';

class Typeahead extends Component {
  onInputChanged(inputText) {
    const { changeInputText, fetchItems } = this.props;

    changeInputText(inputText);
    fetchItems(inputText);
  }

  onItemClicked(item) {
    this.setState({
      inputText: item
    })
  }

  render() {
    const { typeahead } = this.props;

    return (
      <div>
        <Input inputText={typeahead.inputText}
               onInputChanged={this.onInputChanged.bind(this)}/>
        <Dropdown items={typeahead.items}
                  onItemClicked={this.onItemClicked.bind(this)}
                  showDropdown={typeahead.showDropdown}
        />
      </div>
    )
  }
}

export default connect(state => ({
  typeahead: state.typeahead
}), {
  fetchItems,
  changeInputText
})(Typeahead);