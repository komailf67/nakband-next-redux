import {ORDERS, PRODUCTS, CATEGORIES, ADD_PRODUCTS, SALES_INVOICES} from "../../pages/partials/consts/actionsConstants";

const initialState = {
    sales: []
}

export const salesReducer = (state = initialState, action) => {

    switch (action.type) {

        case SALES_INVOICES:
            return {
                ...state,
                salesInvoices: action.salesInvoices
            }
        default:
            return state
    }
}