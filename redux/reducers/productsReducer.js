import { ORDERS, PRODUCTS, CATEGORIES, ADD_PRODUCTS } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  products: []
}

export const productsReducer = (state = initialState, action) => {
 
    switch (action.type) {
      
      case PRODUCTS:
        return {
          ...state,
          products: action.products
        }
      case ADD_PRODUCTS :
        console.log(action.products.data);
        
      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, ...action.products.data]
        }
      }
      default:
         return state
    }
  }