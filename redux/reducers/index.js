import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { categoryReducer } from "./categoryReducer";
import { formReducer } from "./formReducer";

const rootReduces = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  formReducer: formReducer
});

export default rootReduces;
