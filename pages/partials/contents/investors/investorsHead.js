import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import {connect} from "react-redux";
import InvestorsItem from "./investorsItem";
import { dispatchActions } from "../../../../redux/actions";
import { INVESTORS_SALARIES, NEW_INVESTOR_SALARY, MESSAGE_SHOWED } from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";

class InvestorsHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/investors-salaries', INVESTORS_SALARIES);
    }

    render() {
        let { investorsSalaries, messageShowed, newInvestorSalary } = this.props;
        
        let investorSalariesRow = [];
        if (investorsSalaries) {
            investorSalariesRow = investorsSalaries.map((value, index) => {
                return [<InvestorsItem key={index} row={index} investor={value} />];
            })
        }

        if (newInvestorSalary) {
            let {message, success} = newInvestorSalary;

            if (!messageShowed) {
                alert(message);
                this.props.fetchData('', MESSAGE_SHOWED, 1);
            }
            if (success) {
                $('form').find("input").val("");
            }
        }

        return (
            <div id="investors">
                <AddHead />
                <Table className="mt-3" striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>نام</th>
                            <th>توضیحات</th>
                            <th>میزان برداشت</th>
                            <th>تاریخ برداشت</th>
                        </tr>
                    </thead>
                    <tbody>
                        {investorSalariesRow}
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
        investorsSalaries: state.investorsSalaries.investorsSalaries.data,
        messageShowed: state.messageShowed.messageShowed,
        newInvestorSalary:state.investorsSalaries.newInvestorSalary
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestorsHead);