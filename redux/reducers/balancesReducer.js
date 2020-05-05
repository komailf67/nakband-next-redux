import { BALANCES, NEW_BALANCE } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  balances: []
}

export const balancesReducer = (state = initialState, action) => {
  let balances = [];
  switch (action.type) {

    case BALANCES:
      return {
        ...state,
        balances: action.payload
      }
    case NEW_BALANCE:
      balances = state.balances.data;
      console.log('tr', balances);
      
      let newBalances = action.payload.data;
      if (balances.length == 0) {
        balances.push(newBalances);
      } else {
        balances.unshift(newBalances);
      }
      return {
        ...state,
        balances: { data: balances },
        newBalance: action.payload
      }
    default:
      return state
  }
}