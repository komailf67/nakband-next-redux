import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import InvestorsItem from "./investorsItem";
import { dispatchActions } from "../../../../redux/actions";
import { INVESTORS_SALARIES, NEW_INVESTOR_SALARY } from "../../consts/actionsConstants";
import AddHead from "./addHead";
import $ from "jquery";

class InvestorsHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/investors-salaries', INVESTORS_SALARIES);
    }

    render() {
        let { investorsSalaries } = this.props;
        
        let investorSalariesRow = [];
        if (investorsSalaries) {
            investorSalariesRow = $.map(investorsSalaries.data, function (value, index) {
                return [<InvestorsItem key={index} row={index} investor={value} />];
            });
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
        investorsSalaries: state.investorsSalaries.investorsSalaries,
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(InvestorsHead);