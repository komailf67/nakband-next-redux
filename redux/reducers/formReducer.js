import { IS_FORM_SUBMITTED } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  isFormSubmitted: false
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case IS_FORM_SUBMITTED:
        return {
          isFormSubmitted: action.success
        }
      default:
         return state
    }
  }