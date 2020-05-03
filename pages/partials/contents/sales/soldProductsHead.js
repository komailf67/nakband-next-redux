import React, {Component} from "react";
import withRedux from "next-redux-wrapper";
import {initStore} from "../../../../redux/store";
import {dispatchActions} from "../../../../redux/actions";
import {Table} from "react-bootstrap";
import {SOLD_PRODUCTS} from "../../consts/actionsConstants";
import SoldProductsItem from "./soldProductsItem";
import $ from "jquery";

class SoldProductsHead extends Component {
    componentDidMount() {
        this.props.fetchData('http://127.0.0.1/api/sales/products', SOLD_PRODUCTS);
    }

    render() {
        let {soldProducts} = this.props;
        let soldProductRow = [];
        if (soldProducts) {
            soldProductRow = $.map(soldProducts.data, function (value, index) {
                return [<SoldProductsItem key={index} row={index} soldProduct={value}/>];
            });
        }
        return (
            <div id="sold-products">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>شناسه</th>
                        <th>دسته بندی</th>
                        <th>محصول</th>
                        <th>تعداد</th>
                        <th>قیمت خرید</th>
                        <th>قیمت فروش</th>
                        <th>فاکتور خرید</th>
                        <th>فاکتور فروش</th>
                        <th>نام خریدار</th>
                        <th>تاریخ خرید</th>
                        <th>تاریخ فروش</th>
                    </tr>
                    </thead>
                    <tbody>
                    {soldProductRow}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, actionType) => dispatch(dispatchActions(url, actionType)),
    }
}
const mapStateToProps = (state) => {
    return {
        soldProducts: state.sales.soldProducts,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(SoldProductsHead);
