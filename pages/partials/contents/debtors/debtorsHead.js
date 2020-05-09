import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import DebtorsItem from "./debtorsItem";
import { dispatchActions } from "../../../../redux/actions";
import {DEBTORS, MESSAGE_SHOWED} from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";
import {connect} from "react-redux";

class DebtorsHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/debtors', DEBTORS);
    }

    render() {
        let { debtors, messageShowed, newDebtor } = this.props;

        let debtorRow = [];
        if (debtors) {
            debtorRow = debtors.map((value, index) =>  {
                return [<DebtorsItem key={index} row={index} debtor={value} />];
            });
        }

        if (newDebtor) {
            let {message, success} = this.props.newDebtor;

            if (!messageShowed) {
                alert(message);
                this.props.fetchData('', MESSAGE_SHOWED, 1);
            }
            if (success) {
                $('form').find("input").val("");
                $('#category').prop('selectedIndex',0);
            }
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
        messageShowed: state.messageShowed.messageShowed,
        newDebtor:state.debtors.newDebtor,
        debtors: state.debtors.debtors.data,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DebtorsHead);
