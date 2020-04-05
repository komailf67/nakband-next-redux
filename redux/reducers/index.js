import { combineReducers } from "redux";
import { ORDERS,PRODUCTS } from "../../pages/partials/consts/actionsConstants";
// import {  } from "./reducers";



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