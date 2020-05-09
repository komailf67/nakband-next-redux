import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import {connect} from "react-redux";
import ServicesItem from "./servicesItem";
import { products, dispatchActions, selectedProducts } from "../../../../redux/actions";
import { SERVICES } from "../../consts/actionsConstants";



class ServicesHead extends Component {

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/services', SERVICES);
    }

    render() {
        let { services } = this.props;

        let serviceRow = [];

        if (services) {
            serviceRow = services.map((value, index) => {
                return [<ServicesItem key={index} row={index} service={value} />];
            });
        }

        return (
            <div id="services">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>id</th>
                            <th>دسته بندی</th>
                            <th>عنوان</th>
                            <th>مبلغ کل</th>
                            <th>سهم فروشگاه</th>
                            <th>تاریخ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {serviceRow}
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
        services: state.services.services,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicesHead);
