import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReduces from './reducers';

// initial state
const startState = {
  products: []
}

// create store
export const initStore = (initialState = startState) => {
  return createStore(rootReduces, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}