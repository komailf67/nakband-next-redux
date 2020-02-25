import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import { PRODUCTS, ORDERS } from './pages/partials/consts/actionsConstants.js';

// initial state
const startState = {
  products: []
}

// Actions
export const products = (products) => {
  return {
    type: 'PRODUCTS',
    products
  }
}

export const orders = (orders) => {  
  return {
    type: 'ORDERS',
    orders
  }
}


export function dispachActions(url, actionType) {
  return (dispatch) => {
    
    switch (actionType) {
      case PRODUCTS:
        axios.get(url)
          .then((response) => {
            dispatch(products(response.data))
            return response;
          })
        break;
      case ORDERS:
        axios.get(url)
          .then((response) => {
            dispatch(orders(response.data))
            return response;
          })
        break;
      default:
        break;
    }

  }
}

// reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case PRODUCTS:
      return {
        ...state,
        products: action.products
      }
    case ORDERS :
      return {
        ...state,
        orders: action.orders
      }
    default: return state
  }
}

// create store
export const initStore = (initialState = startState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}