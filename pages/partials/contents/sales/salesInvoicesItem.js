import React, {Component} from 'react';

class SalesInvoicesItem extends Component {
    render() {
        let {row, saleInvoice} = this.props;
        return (
            <tr>
                <td>{row + 1}</td>
                <td>{saleInvoice.id}</td>
                <td>{saleInvoice.customer_name}</td>
                <td>{saleInvoice.customer_number}</td>
                <td>{saleInvoice.has_guarantee}</td>
                <td>{saleInvoice.has_assurance}</td>
                <td>{saleInvoice.date}</td>
                <td>{saleInvoice.amount}</td>
            </tr>
        )
    }
}

export default SalesInvoicesItem;