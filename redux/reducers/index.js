import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";
import { ORDERS, PRODUCTS, CATEGORIES, ADD_PRODUCTS } from "../../pages/partials/consts/actionsConstants";

const rootReduces = combineReducers({
  categories: categoryReducer,
  products: productsReducer
});

export default rootReduces;
