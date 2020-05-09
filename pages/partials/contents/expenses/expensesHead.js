import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import {connect} from "react-redux";
import ExpensesItem from "./expensesItem";
import { dispatchActions } from "../../../../redux/actions";
import { EXPENSES } from "../../consts/actionsConstants";

class ExpensesHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/expenses', EXPENSES);
    }

    render() {
        let { expenses } = this.props;
        
        let expenseRow = [];
        if (expenses) {
            expenseRow = expenses.map((value, index) => {
                return [<ExpensesItem key={index} row={index} expense={value} />];
            });
        }
        return (
            <div id="expenses">
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
    return {
        expenses: state.expenses.expenses.data,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesHead);
