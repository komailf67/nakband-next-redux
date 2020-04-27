import {combineReducers} from "redux";
import {productsReducer} from "./productsReducer";
import {categoryReducer} from "./categoryReducer";
import {formReducer} from "./formReducer";
import {salesReducer} from "./salesReducer";
import {modalReducer} from "./modalReducer";
import {serviceReducer} from "./serviceReducer";
import {messageReducer} from "./messageReducer";

const rootReduces = combineReducers({
    categories: categoryReducer,
    products: productsReducer,
    formReducer: formReducer,
    sales: salesReducer,
    isOpenModal: modalReducer,
    services: serviceReducer,
    messageShowed: messageReducer
});

export default rootReduces;
