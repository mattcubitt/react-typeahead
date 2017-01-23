import axios from 'axios';

export const SET_ITEMS = 'typeahead/SET_ITEMS';
export const CHANGE_INPUT_TEXT = 'typeahead/CHANGE_INPUT_TEXT';

export const setItems = items => {
  return {
    type: SET_ITEMS,
    items
  };
};

export const fetchItems = inputText => {
  return dispatch => axios.get('/api/company/allMatching', {
    params: {
      jurisdictionCode: 'gb',
      name: inputText
    }
  })
  .then(response => dispatch(setItems(response.data)));
};

export const changeInputText = inputText => {
  return dispatch => dispatch({
    type: CHANGE_INPUT_TEXT,
    inputText
  })
};