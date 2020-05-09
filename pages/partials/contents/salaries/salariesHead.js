import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import SalariesItem from "./salariesItem";
import { dispatchActions } from "../../../../redux/actions";
import {MESSAGE_SHOWED, SALARIES} from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";
import {connect} from "react-redux";

class SalariesHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/salaries', SALARIES);
    }

    render() {
        let { salaries, messageShowed, newSalary } = this.props;
        
        let salaryRow = [];
        if (salaries) {
            salaryRow = salaries.map((value, index) => {
                return [<SalariesItem key={index} row={index} salary={value} />];
            });
        }

        if (newSalary) {
            let {message, success} = newSalary;

            if (!messageShowed) {
                alert(message);
                this.props.fetchData('', MESSAGE_SHOWED, 1);
            }

            if (success) {
                $('form').find("input").val("");
            }
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
                        {salaryRow}
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
        salaries: state.salaries.salaries.data,
        messageShowed: state.messageShowed.messageShowed,
        newSalary:state.salaries.newSalary
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SalariesHead);