import { TRANSACTIONS, NEW_TRANSACTION } from "../../pages/partials/consts/actionsConstants";

const initialState = {
  transactions: []
}

export const transactionsReducer = (state = initialState, action) => {
  let transactions = [];
  switch (action.type) {

    case TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      }
    case NEW_TRANSACTION:
      transactions = state.transactions.data;
      console.log('tr', transactions);
      
      let newTransactions = action.payload.data;
      if (transactions.length == 0) {
        transactions.push(newTransactions);
      } else {
        transactions.unshift(newTransactions);
      }
      return {
        ...state,
        transactions: { data: transactions },
        newTransaction: action.payload
      }
    default:
      return state
  }
}