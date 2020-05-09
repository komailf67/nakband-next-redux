import {ORDERS, PRODUCTS, CATEGORIES, ADD_PRODUCTS, SALE_PRODUCTS} from "../../pages/partials/consts/actionsConstants";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    let products = [];
    switch (action.type) {

        case PRODUCTS:
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
            products = state.products.data;//array
            let soldProductsIds = Object.keys(action.payload.data);
            soldProductsIds = soldProductsIds.map(item => {
                return Number(item);//convert array of string to array of numbers
            });

            products.filter(item => {
                if (soldProductsIds.includes(item.id)) {
                    item.exist_count = Number(item.exist_count) - Number(action.payload.data[item.id].count);
                }
            });

            return {
                ...state,
                products: {data: products}
            }

        default:
            return state
    }
}