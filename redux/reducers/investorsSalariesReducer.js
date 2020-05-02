import { INVESTORS_SALARIES, NEW_INVESTOR_SALARY } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  investorsSalaries: []
}

export const investorsSalariesReducer = (state = initialState, action) => {
    let oldSalaries = [];
    switch (action.type) {
      
      case INVESTORS_SALARIES:
        return {
          ...state,
          investorsSalaries: action.payload
        }
      case NEW_INVESTOR_SALARY: 
           oldSalaries = state.investorsSalaries.data;
           let newSalaries = action.payload.data;
           if (oldSalaries.length == 0) {
            oldSalaries.push(newSalaries);           
           } else {
             oldSalaries.unshift(newSalaries);           
           }
        return {
            ...state,
            investorsSalaries:{data: oldSalaries},
            newInvestorSalary: action.payload
        }
      default:
         return state
    }
  }