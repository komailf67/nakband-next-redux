import React, {Component} from 'react';

class ProductsItem extends Component {
    render() {
        let {row, product} = this.props;
        return (
            <tr>
                <td>{row+1}</td>
                <td>{product.id}</td>
                <td>{product.categoryTitle}</td>
                <td>{product.description}</td>
                <td>{product.buy_price}</td>
                <td>{product.exist_count}</td>
                <td>{product.created_at}</td>
            </tr>
        )
    }
}
export default ProductsItem;