import {SALES_INVOICES, SELECTED_PRODUCTS, SOLD_PRODUCTS} from "../../pages/partials/consts/actionsConstants";

const initialState = {
    sales: [],
}

export const salesReducer = (state = initialState, action) => {
    // console.log('saleReducer', action);
    
    switch (action.type) {

        case SALES_INVOICES:
            return {
                ...state,
                salesInvoices: action.salesInvoices
            }
        case SELECTED_PRODUCTS:
            return {
                ...state,
                selectedProductsIds: action.selectedProductsIds
            }
        case SOLD_PRODUCTS:
            return {
                ...state,
                soldProducts: action.payload
            }
    
        default:
            return state
    }
}