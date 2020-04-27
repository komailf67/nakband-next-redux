import React, {Component} from 'react';

class ServicesItem extends Component {
    render() {
        let {row, service} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{service.id}</td>
                <td>{service.category}</td>
                <td>{service.title}</td>
                <td>{service.total_amount}</td>
                <td>{service.shop_share}</td>
                <td>{service.date}</td>
            </tr>
        )
    }
}
export default ServicesItem;