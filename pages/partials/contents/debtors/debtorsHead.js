import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import DebtorsItem from "./debtorsItem";
import { dispatchActions } from "../../../../redux/actions";
import { DEBTORS } from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";

class DebtorsHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/debtors', DEBTORS);
    }

    render() {
        let { debtors } = this.props;
        
        let debtorRow = [];
        if (debtors) {
            debtorRow = $.map(debtors.data, function (value, index) {
                return [<DebtorsItem key={index} row={index} debtor={value} />];
            });
        }

        return (
            <div id="debtors">
                <AddHead />
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>نام بدهکار</th>
                            <th>توضیحات</th>
                            <th>مبلغ بدهی</th>
                            <th>تاریخ</th>
                            <th>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {debtorRow}
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
        debtors: state.debtors.debtors,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(DebtorsHead);