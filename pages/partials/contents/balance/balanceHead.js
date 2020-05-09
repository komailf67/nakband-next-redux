import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import BalancesItem from "./balancesItem";
import { dispatchActions } from "../../../../redux/actions";
import {BALANCES, MESSAGE_SHOWED} from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";
import {connect} from "react-redux";

class BalanceHead extends Component {

  componentDidMount = () => {
    this.props.fetchData('http://127.0.0.1/api/balances', BALANCES);
  }

  render() {
    let { balances, messageShowed, newBalance } = this.props;

    let balanceRow = [];
    if (balances) {
      balanceRow = balances.map((value, index) => {
        return [<BalancesItem key={index} row={index} balance={value} />];
      });
    }

    if (newBalance) {
      let {message, success} = newBalance;

      if (!messageShowed) {
        alert(message);
        this.props.fetchData('', MESSAGE_SHOWED, 1);
      }
      if (success) {
        $('form').find("input").val("");
        $('form').find("textarea").val("");
      }
    }

    return (
      <div id="balances">
        <AddHead />
        <Table className="mt-3" striped bordered hover>
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نقد (تومان)</th>
              <th>موجودی بانک (تومان)</th>
              <th>مجموع تراکنش های ثبت نشده</th>
              <th>توضیحات</th>
              <th>تاریخ موجودی</th>
              <th>تاریخ ثبت</th>
              <th>تاخیر در ثبت</th>
            </tr>
          </thead>
          <tbody>
            {balanceRow}
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
    balances: state.balances.balances.data,
    messageShowed: state.messageShowed.messageShowed,
    newBalance:state.balances.newBalance
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BalanceHead);