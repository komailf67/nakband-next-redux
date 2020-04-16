import React, {Component} from 'react';
import {Table} from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import ProductsItem from "./productsItem";
import { products, dispatchActions } from "../../../../redux/actions";
import { PRODUCTS } from "../../consts/actionsConstants";
import $ from "jquery";


class ProductsHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/products',PRODUCTS);
    }

    render() {
        let { products } = this.props;
        let productRow = [];
        if (products) {
            productRow = $.map(products.data, function (value, index) {
                return [<ProductsItem key={index} row={index} product={value} />];
            });
        }
        
        return (
            <div id="storage">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>id</th>
                            <th>دسته بندی</th>
                            <th>نام محصول</th>
                            <th>قیمت خرید</th>
                            <th>تعداد</th>
                            <th>تاریخ خرید</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRow}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url , actionType) => dispatch(dispatchActions(url , actionType)),

        // initialCards: bindActionCreators(initialCards, dispatch),
        // addItem: bindActionCreators(addItem, dispatch),
        // komail: bindActionCreators(products, dispatch)
    }
  }
  const mapStateToProps = (state) => {
    // console.log(state);
    return {
      products: state.products,
    }
  }

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductsHead);