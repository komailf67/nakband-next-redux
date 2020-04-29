import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import ExpensesItem from "./expensesItem";
import { dispatchActions } from "../../../../redux/actions";
import { EXPENSES } from "../../consts/actionsConstants";
import $ from "jquery";

class ExpensesHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/expenses', EXPENSES);
    }

    render() {
        let { expenses } = this.props;
        
        let expenseRow = [];
        if (expenses) {
            expenseRow = $.map(expenses.data, function (value, index) {
                return [<ExpensesItem key={index} row={index} expense={value} />];
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
                            <th>توضیحات</th>
                            <th>مبلغ کل</th>
                            <th>شماره فاکتور</th>
                            <th>تاریخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenseRow}
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
    // console.log('ddd',state);
    
    return {
        expenses: state.expenses.expenses,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ExpensesHead);