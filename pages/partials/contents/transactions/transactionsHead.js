import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import TransactionsItem from "./transactionsItem";
import { dispatchActions } from "../../../../redux/actions";
import { TRANSACTIONS } from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";

class TransactionsHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/transactions', TRANSACTIONS);
    }

    render() {
        let { transactions } = this.props;
        
        let transactionRow = [];
        if (transactions) {
            transactionRow = $.map(transactions.data, function (value, index) {
                return [<TransactionsItem key={index} row={index} transaction={value} />];
            });
        }

        return (
            <div id="transactions">
                <AddHead />
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>شماره تراکنش</th>
                            <th>توضیحات</th>
                            <th>مبلغ (ریال)</th>
                            <th>موجودی (ریال)</th>
                            <th>تاریخ تراکنش</th>
                            <th>تاخیر ثبت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionRow}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, actionType, data) => dispatch(dispatchActions(url, actionType, data)),
    }
}
const mapStateToProps = (state) => {   
    return {
        transactions: state.transactions.transactions,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(TransactionsHead);