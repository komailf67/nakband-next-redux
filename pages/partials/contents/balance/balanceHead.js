import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import BalancesItem from "./balancesItem";
import { dispatchActions } from "../../../../redux/actions";
import { BALANCES } from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";

class BalanceHead extends Component {

  componentDidMount = () => {
    this.props.fetchData('http://127.0.0.1/api/balances', BALANCES);
  }

  render() {
    let { balances } = this.props;

    let balanceRow = [];
    if (balances) {
      balanceRow = $.map(balances.data, function (value, index) {
        return [<BalancesItem key={index} row={index} balance={value} />];
      });
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
    balances: state.balances.balances,
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(BalanceHead);