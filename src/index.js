import React from 'react';
import ReactDOM from 'react-dom';
import Typeahead from './Typeahead';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import typeaheadReducer from './typeaheadReducer';

const reducers = {
  typeahead: typeaheadReducer
};

const rootReducer = combineReducers(reducers);

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <Typeahead/>
  </Provider>,
  document.getElementById('root')
);
