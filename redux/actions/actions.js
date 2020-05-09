import {
    PRODUCTS,
    ORDERS,
    CATEGORIES,
    ADD_PRODUCTS,
    IS_FORM_SUBMITTED,
    IS_OPEN_MODAL,
    SELECTED_PRODUCTS,
    SALE_PRODUCTS,
    NEW_SERVICE,
    SERVICES,
    MESSAGE_SHOWED,
    SALES_INVOICES,
    EXPENSES,
    NEW_EXPENSE,
    DEBTORS,
    NEW_DEBTOR,
    CHECKOUT_DEBT,
    SALARIES,
    NEW_SALARY,
    NEW_INVESTOR_SALARY,
    INVESTORS_SALARIES,
    SOLD_PRODUCTS,
    TRANSACTIONS,
    NEW_TRANSACTION,
    NEW_BALANCE,
    BALANCES
} from '../../pages/partials/consts/actionsConstants.js';
import axios from 'axios';


// Actions
export const products = (products) => {
    return {
        type: PRODUCTS,
        products
    }
}

// export const orders = (orders) => {
//   return {
//     type: 'ORDERS',
//     orders
//   }
// }

export const categories = (categories) => {
    return {
        type: CATEGORIES,
        categories
    }
}

export const addProduct = (products) => {
    return {
        type: ADD_PRODUCTS,
        products
    }
}

export const isFormSubmitted = (success) => {
    return {
        type: IS_FORM_SUBMITTED,
        success
    }
}

export const salesInvoices = (salesInvoices) => {
    return {
        type: SALES_INVOICES,
        salesInvoices
    }
}

export const isOpenModal = (trueOrFalse) => {
    return {
        type: IS_OPEN_MODAL,
        trueOrFalse
    }
}

export const selectedProducts = (selectedProductsIds) => {
    return {
        type: SELECTED_PRODUCTS,
        selectedProductsIds
    }
}

/**
 *
 * @param {*} saleProducts
 * for list of products that selected for sale(in modal)
 */
export const saleProducts = (saleProducts) => {
    return {
        type: SALE_PRODUCTS,
        payload: saleProducts
    }
}

/**
 *
 * @param {*} saleProducts
 * for list of products that sold
 */
export const soldProducts = (soldProducts) => {
    return {
        type: SOLD_PRODUCTS,
        payload: soldProducts
    }
}

export const services = (services) => {
    return {
        type: SERVICES,
        services
    }
}

export const newService = (newService) => {
    return {
        type: NEW_SERVICE,
        newService
    }
}

export const messageShowed = (trueOrFalse) => {
    return {
        type: MESSAGE_SHOWED,
        payload: trueOrFalse
    }
}

export const expenses = (expenses) => {
    return {
        type: EXPENSES,
        payload: expenses
    }
}

export const newExpense = (newExpense) => {
    return {
        type: NEW_EXPENSE,
        payload: newExpense
    }
}

export const debtors = (debtors) => {
    return {
        type: DEBTORS,
        payload: debtors
    }
}

export const newDebtor = (newDebtor) => {
    return {
        type: NEW_DEBTOR,
        payload: newDebtor
    }
}

export const checkoutDebt = (id) => {
    return {
        type: CHECKOUT_DEBT,
        payload: id
    }
}

export const newSalary = (newSalary) => {
    return {
        type: NEW_SALARY,
        payload: newSalary
    }
}

export const salaries = (salaries) => {
    return {
        type: SALARIES,
        payload: salaries
    }
}

export const investorsSalaries = (investorsSalaries) => {
    return {
        type: INVESTORS_SALARIES,
        payload: investorsSalaries
    }
}

export const newInvestorsSalary = (newInvestorSalary) => {
    return {
        type: NEW_INVESTOR_SALARY,
        payload: newInvestorSalary
    }
}

export const transactions = (transactions) => {
    return {
        type: TRANSACTIONS,
        payload: transactions
    }
}

export const newTransaction = (newTransaction) => {
    return {
        type: NEW_TRANSACTION,
        payload: newTransaction
    }
}

export const balances = (balances) => {
    return {
        type: BALANCES,
        payload: balances
    }
}

export const newBalance = (newBalance) => {
    return {
        type: NEW_BALANCE,
        payload: newBalance
    }
}

export function dispatchActions(url, actionType, data) {
    return (dispatch) => {

        switch (actionType) {
            case PRODUCTS:
                axios.get(url)
                    .then((response) => {
                        dispatch(products(response.data))
                        return response;
                    })
                break;
            case CATEGORIES:
                axios.get(url)
                    .then((response) => {
                        dispatch(categories(response.data))
                        return response;
                    })
                break;
            case ORDERS:
                axios.get(url)
                    .then((response) => {
                        dispatch(orders(response.data))
                        return response;
                    })
                break;
            case ADD_PRODUCTS:
                axios.post(url,
                    {
                        data
                        // headers: {
                        //   "Access-Control-Allow-Origin": "*"
                        // }
                    })
                    .then((response) => {
                        // console.log(response);
                        dispatch(isFormSubmitted(response.data.success))
                        dispatch(addProduct(response.data))
                    }).catch(e => {
                    console.log(e);

                })
                break;
            case IS_FORM_SUBMITTED:
                dispatch(isFormSubmitted(data))
            case SALES_INVOICES:
                axios.get(url)
                    .then((response) => {
                        dispatch(salesInvoices(response.data))
                        return response;
                    })
                break;
            case IS_OPEN_MODAL:
                dispatch(isOpenModal(data))
                break;
            case SELECTED_PRODUCTS:
                dispatch(selectedProducts(data))
                break;
            case SALE_PRODUCTS:
                axios.post(url, {data})
                    .then((response) => {
                        dispatch(saleProducts(response.data))
                        return response;
                    }).then(() => {
                    dispatch(isOpenModal(0));
                })
                break;
            case SOLD_PRODUCTS:
                axios.get(url)
                    .then((response) => {
                        dispatch(soldProducts(response.data))
                        return response;
                    })
                break;
            case SERVICES:
                axios.get(url)
                    .then((response) => {
                        dispatch(services(response.data))
                        return response;
                    })
                break;
            case NEW_SERVICE:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newService(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case MESSAGE_SHOWED:
                dispatch(messageShowed(data))
                break;
            case EXPENSES:
                axios.get(url)
                    .then((response) => {
                        dispatch(expenses(response.data))
                        return response;
                    })
                break;
            case NEW_EXPENSE:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newExpense(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case DEBTORS:
                axios.get(url)
                    .then((response) => {
                        dispatch(debtors(response.data))
                        return response;
                    })
                break;
            case NEW_DEBTOR:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newDebtor(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case CHECKOUT_DEBT:
                axios.delete(url, data)
                    .then((response) => {
                        dispatch(checkoutDebt(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case SALARIES:
                axios.get(url)
                    .then((response) => {
                        dispatch(salaries(response.data))
                        return response;
                    })
                break;
            case NEW_SALARY:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newSalary(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case INVESTORS_SALARIES:
                axios.get(url)
                    .then((response) => {
                        dispatch(investorsSalaries(response.data))
                        return response;
                    })
                break;
            case NEW_INVESTOR_SALARY:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newInvestorsSalary(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case TRANSACTIONS:
                axios.get(url)
                    .then((response) => {
                        dispatch(transactions(response.data))
                        return response;
                    })
                break;
            case NEW_TRANSACTION:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newTransaction(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            case BALANCES:
                axios.get(url)
                    .then((response) => {
                        dispatch(balances(response.data))
                        return response;
                    })
                break;
            case NEW_BALANCE:
                axios.post(url, data)
                    .then((response) => {
                        dispatch(newBalance(response.data))
                        return response;
                    }).then(() => {
                    dispatch(messageShowed(0));
                })
                break;
            default:
                break;
        }

    }
}