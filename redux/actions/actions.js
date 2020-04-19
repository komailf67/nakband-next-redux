import { PRODUCTS, ORDERS, CATEGORIES, ADD_PRODUCTS, IS_FORM_SUBMITTED } from '../../pages/partials/consts/actionsConstants.js';
import axios from 'axios';


// Actions
export const products = (products) => {
    return {
      type: PRODUCTS,
      products
    }
  }
  
  // export const orders = (orders) => {  
  //   return {
  //     type: 'ORDERS',
  //     orders
  //   }
  // }

  export const categories = (categories) => {  
    return {
      type: CATEGORIES,
      categories
    }
  }

  export const addProduct = (products) => {  
    return {
      type: ADD_PRODUCTS,
      products
    }
  }

  export const isFormSubmitted = ( success ) => {
    return {
      type: IS_FORM_SUBMITTED,
      success
    }
  }

  export function dispatchActions(url, actionType, data) {    
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
        case ADD_PRODUCTS:
          axios.post(url, 
          {
            data
            // headers: { 
            //   "Access-Control-Allow-Origin": "*"
            // }
          })
          .then((response) => {
            // console.log(response);
            dispatch(isFormSubmitted(response.data.success))
            dispatch(addProduct(response.data))
          }).catch(e => {
            console.log(e);
            
          })
        break;
        case IS_FORM_SUBMITTED:
          dispatch(isFormSubmitted(data))
        default:
          break;
      }
  
    }
  }