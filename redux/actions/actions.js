import { PRODUCTS, ORDERS, CATEGORIES } from '../../pages/partials/consts/actionsConstants.js';
import axios from 'axios';


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

  export const categories = (categories) => {  
    return {
      type: CATEGORIES,
      categories
    }
  }



  export function dispatchActions(url, actionType) {
    // console.log(actionType);
    
    return (dispatch) => {
      
      switch (actionType) {
        case PRODUCTS:
          axios.get(url)
            .then((response) => {
              dispatch(products(response.data))
              return response;
            })
          break;
        case CATEGORIES:
          axios.get(url)
            .then((response) => {              
              dispatch(categories(response.data))
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