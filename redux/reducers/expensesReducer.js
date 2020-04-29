import { EXPENSES, NEW_EXPENSE } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  expenses: []
}

export const expensesReducer = (state = initialState, action) => {
 
    switch (action.type) {
      
      case EXPENSES:
        return {
          ...state,
          expenses: action.payload
        }
      case NEW_EXPENSE:      
        return {
            ...state,
            newExpense: action.payload
        }
      default:
         return state
    }
  }