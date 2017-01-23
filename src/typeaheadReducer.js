import { SET_ITEMS, CHANGE_INPUT_TEXT } from './typeaheadActions'

const initialState = {
  items: [
  ],
  showDropdown: false,
  inputText: ''
};

const typeaheadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.items
      };
    case CHANGE_INPUT_TEXT:
      return {
        ...state,
        inputText: action.inputText,
        showDropdown: true
      };
    default: return state;
  }

  return state;
};

export default typeaheadReducer;