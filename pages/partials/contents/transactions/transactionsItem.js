import React, {Component} from 'react';

class TransactionsItem extends Component {

    render() {
        let {row, transaction} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{transaction.transaction_number}</td>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.balance}</td>
                <td>{transaction.date}</td>
                <td>{transaction.delay}</td>
            </tr>
        )
    }
}

export default TransactionsItem;
