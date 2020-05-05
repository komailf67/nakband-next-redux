import React, {Component} from 'react';

class BalancesItem extends Component {

    render() {
        let {row, balance} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{balance.cash}</td>
                <td>{balance.bank}</td>
                <td>{balance.unrecorded}</td>
                <td>{balance.description}</td>
                <td>{balance.date}</td>
                <td>{balance.created_at}</td>
                <td>{balance.delay}</td>
            </tr>
        )
    }
}

export default BalancesItem;
