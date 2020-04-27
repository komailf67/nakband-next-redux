import { ORDERS, PRODUCTS, CATEGORIES, ADD_PRODUCTS, SALE_PRODUCTS } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  products: []
}

export const productsReducer = (state = initialState, action) => {
 
    switch (action.type) {
      
      case PRODUCTS:
        console.log('dddddddd');
        
        return {
          ...state,
          products: action.products
        }
      case ADD_PRODUCTS :       
      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, ...action.products.data]
        }
      }
      case SALE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
      // case SALE_PRODUCTS :
      //   console.log('s', action.saleProducts.data[3]);
      //   let products = state.products.data;
      //   let soldProducts = action.saleProducts.data;
      //   return {
      //     products: {

      //     }          
      //   }
      default:
         return state
    }
  }