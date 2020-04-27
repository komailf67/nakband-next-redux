import {
    PRODUCTS,
    ORDERS,
    CATEGORIES,
    ADD_PRODUCTS,
    IS_FORM_SUBMITTED,
    IS_OPEN_MODAL,
    SELECTED_PRODUCTS,
    SALE_PRODUCTS,
    NEW_SERVICE,
    SERVICES,
    MESSAGE_SHOWED,
    SALES_INVOICES
} from '../../pages/partials/consts/actionsConstants.js';
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

export const isFormSubmitted = (success) => {
    return {
        type: IS_FORM_SUBMITTED,
        success
    }
}

export const salesInvoices = (salesInvoices) => {
    return {
        type: SALES_INVOICES,
        salesInvoices
    }
}

export const isOpenModal = (trueOrFalse) => {
    return {
        type: IS_OPEN_MODAL,
        trueOrFalse
    }
}

export const selectedProducts = (selectedProductsIds) => {
    return {
        type: SELECTED_PRODUCTS,
        selectedProductsIds
    }
}

export const saleProducts = (saleProducts) => {
    return {
        type: SALE_PRODUCTS,
        payload: saleProducts
    }
}

export const services = (services) => {
    return {
        type: SERVICES,
        services
    }
}

export const newService = (newService) => {   
    return {
        type: NEW_SERVICE,
        newService
    }
}

export const messageShowed = (trueOrFalse) => {    
    return {
        type: MESSAGE_SHOWED,
        payload: trueOrFalse
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
            case SALES_INVOICES:
                axios.get(url)
                    .then((response) => {
                        dispatch(salesInvoices(response.data))
                        return response;
                    })
                break;
            case IS_OPEN_MODAL:                               
                dispatch(isOpenModal(data))
                break;
            case SELECTED_PRODUCTS:
                dispatch(selectedProducts(data))
                break;
            case SALE_PRODUCTS:
                axios.post(url,{data})
                    .then((response) => {
                        dispatch(saleProducts(response.data))
                        return response;
                    })
                break;
            case SERVICES:
                axios.get(url)
                    .then((response) => {
                        dispatch(services(response.data))
                        return response;
                    })
                break;
            case NEW_SERVICE:
                axios.post(url,data)
                    .then((response) => {
                        dispatch(newService(response.data))
                        return response;
                    }).then(()=>{
                        dispatch(messageShowed(0));
                    })
                break;
            case MESSAGE_SHOWED:
                dispatch(messageShowed(data))
                break;
            default:
                break;
        }

    }
}