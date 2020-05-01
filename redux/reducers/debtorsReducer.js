import { DEBTORS, NEW_DEBTOR, CHECKOUT_DEBT } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  debtors: []
}

export const debtorsReducer = (state = initialState, action) => {
    let oldDebtors = [];
    switch (action.type) {
      
      case DEBTORS:
        return {
          ...state,
          debtors: action.payload
        }
      case NEW_DEBTOR: 
           oldDebtors = state.debtors.data;
           let newDebtors = action.payload.data;
           if (oldDebtors.length == 0) {
            oldDebtors.push(newDebtors);           
           } else {
             oldDebtors.unshift(newDebtors);           
           }
        return {
            ...state,
            debtors:{data: oldDebtors},
            newDebtor: action.payload
        }
      case CHECKOUT_DEBT:       
          oldDebtors = state.debtors.data;
          oldDebtors = oldDebtors.filter(debt => debt.id !== action.payload.data);
      return {
          ...state,
          debtors:{data: oldDebtors},
          newDebtor: action.payload
      }
      default:
         return state
    }
  }