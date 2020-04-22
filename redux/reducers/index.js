import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {categoryReducer} from "./categoryReducer";
import {formReducer} from "./formReducer";
import {salesReducer} from "./salesReducer";

const rootReduces = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    formReducer: formReducer,
    sales: salesReducer
});

export default rootReduces;
