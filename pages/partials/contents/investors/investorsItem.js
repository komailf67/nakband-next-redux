import React, {Component} from 'react';

class InvestorsItem extends Component {

    render() {
        let {row, investor} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{investor.name}</td>
                <td>{investor.description}</td>
                <td>{investor.amount}</td>
                <td>{investor.date}</td>
            </tr>
        )
    }
}

export default InvestorsItem;
