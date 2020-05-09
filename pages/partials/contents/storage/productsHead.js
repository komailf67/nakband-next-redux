import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import {connect} from "react-redux";
import ProductsItem from "./productsItem";
import { products, dispatchActions, selectedProducts } from "../../../../redux/actions";
import { PRODUCTS, IS_OPEN_MODAL, SELECTED_PRODUCTS } from "../../consts/actionsConstants";
import $ from "jquery";
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../../modal/Modal.js';
import SaleModal from "../sales/saleModal";



class ProductsHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/products', PRODUCTS);
        this.props.fetchData('', IS_OPEN_MODAL, 0);
        let thisProps = this.props;
        $('button.btn-primary').click(function(){
            let selectedProductsId = [];
            $('input:checked').each(function () {
                selectedProductsId.push($(this).data('product-id'));
            });
            thisProps.fetchData('', SELECTED_PRODUCTS, selectedProductsId);
            thisProps.fetchData('', IS_OPEN_MODAL, 1);
        });
    }

    toggle = () => {
        let selectedProductsId = [];
        $('input:checked').each(function () {
            selectedProductsId.push($(this).data('product-id'));
        });
        this.props.fetchData('', SELECTED_PRODUCTS, selectedProductsId);
        this.props.fetchData('', IS_OPEN_MODAL, 1);
    }

    render() {
        let { products, is_open_modal } = this.props;

        let productRow = [];
        if (products) {
            productRow = products.map((value, index) => {
                return [<ProductsItem key={index} row={index} product={value} />];
            });
        }
        let saleModalComponent = [];
        if (is_open_modal) {
            saleModalComponent = <SaleModal />
        }

        return (
            <div id="storage">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ردیف</th>
                            <th>id</th>
                            <th>دسته بندی</th>
                            <th>نام محصول</th>
                            <th>قیمت خرید</th>
                            <th>موجودی اولیه</th>
                            <th>تعداد موجود</th>
                            <th>تاریخ خرید</th>
                            <th>انتخاب</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRow}
                    </tbody>
                </Table>
                <Button variant="primary"
                        // onClick={this.toggle}
                >فروش</Button>{' '}
                <div className="App">
                    {saleModalComponent}
                </div>

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
    // console.log('ddd',state);
    
    return {
        products: state.products.products.data,
        is_open_modal: state.isOpenModal.is_open_modal
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsHead);