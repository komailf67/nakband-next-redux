import React, {Component} from "react";
import withRedux from "next-redux-wrapper";
import {initStore} from "../../../../redux/store";
import {dispatchActions} from "../../../../redux/actions";
import {Table} from "react-bootstrap";
import {SALES_INVOICES} from "../../consts/actionsConstants";
import SalesInvoicesItem from "./salesInvoicesItem";
import $ from "jquery";

class InvoicesHead extends Component {
    componentDidMount() {
        this.props.fetchData('http://127.0.0.1/api/sales/invoices', SALES_INVOICES);
    }

    render() {
        let {saleInvoices} = this.props;
        let salesRow = [];
        if (saleInvoices) {
            salesRow = $.map(saleInvoices.data, function (value, index) {
                return [<SalesInvoicesItem key={index} row={index} saleInvoice={value}/>];
            });
        }
        return (
            <div id="storage">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>شماره فاکتور</th>
                        <th>نام خریدار</th>
                        <th>شماره تماس</th>
                        <th>گارانتی</th>
                        <th>بیمه</th>
                        <th>تاریخ فروش</th>
                        <th>تاریخ ثبت</th>
                        <th>مبلغ فاکتور</th>
                    </tr>
                    </thead>
                    <tbody>
                    {salesRow}
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
        saleInvoices: state.sales.salesInvoices,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(InvoicesHead);
