import { NEW_SALARY, SALARIES } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  salaries: []
}

export const salariesReducer = (state = initialState, action) => {
    let oldSalaries = [];
    switch (action.type) {
      
      case SALARIES:
        return {
          ...state,
          salaries: action.payload
        }
      case NEW_SALARY: 
           oldSalaries = state.salaries.data;
           let newSalaries = action.payload.data;
           if (oldSalaries.length == 0) {
            oldSalaries.push(newSalaries);           
           } else {
             oldSalaries.unshift(newSalaries);           
           }
        return {
            ...state,
            salaries:{data: oldSalaries},
            newSalary: action.payload
        }
      default:
         return state
    }
  }