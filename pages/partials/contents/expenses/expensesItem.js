import React, {Component} from 'react';

class ExpensesItem extends Component {
    render() {
        let {row, expense} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{expense.id}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.total_amount}</td>
                <td>{expense.invoice_number}</td>
                <td>{expense.date}</td>
            </tr>
        )
    }
}
export default ExpensesItem;