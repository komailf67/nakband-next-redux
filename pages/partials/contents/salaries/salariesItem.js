import React, {Component} from 'react';

class SalariesItem extends Component {

    render() {
        let {row, salary} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{salary.seller_name}</td>
                <td>{salary.month}</td>
                <td>{salary.year}</td>
                <td>{salary.amount}</td>
                <td>{salary.date}</td>
                <td>{salary.created_at}</td>
                <td>{salary.delay}</td>
            </tr>
        )
    }
}

export default SalariesItem;
