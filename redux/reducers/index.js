import { combineReducers } from "redux";
import { ORDERS,PRODUCTS, CATEGORIES } from "../../pages/partials/consts/actionsConstants";



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
      case CATEGORIES :
      return {
        ...state,
        categories: action.categories
      }
      default: return state
    }
  }