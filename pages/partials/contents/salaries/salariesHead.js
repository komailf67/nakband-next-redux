import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import SalariesItem from "./salariesItem";
import { dispatchActions } from "../../../../redux/actions";
import { SALARIES } from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";

class SalariesHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/salaries', SALARIES);
    }

    render() {
        let { salaries } = this.props;
        
        let salariyRow = [];
        if (salaries) {
            salariyRow = $.map(salaries.data, function (value, index) {
                return [<SalariesItem key={index} row={index} salary={value} />];
            });
        }

        return (
            <div id="salaries">
                <AddHead />
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>نام</th>
                            <th>ماه</th>
                            <th>سال</th>
                            <th>مبلغ پرداختی</th>
                            <th>تاریخ پرداخت</th>
                            <th>تاریخ ثبت</th>
                            <th>تاخیر در ثبت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salariyRow}
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
        salaries: state.salaries.salaries,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(SalariesHead);