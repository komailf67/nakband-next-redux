import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
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
        // console.log('d',this.props);
        
        let productRow = [];
        if (products) {
            productRow = $.map(products.data, function (value, index) {
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
                <Button variant="primary" onClick={this.toggle}>فروش</Button>{' '}
                <div className="App">
                    {/* <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={this.toggle}
                    >
                        فروش
                    </button> */}

                    {/* <Modal isOpen={this.state.modal}> */}
                    {saleModalComponent}
                        {/* <SaleModal /> */}
                        {/* <ModalHeader>
                            <h3>Create new project</h3>
                            <button
                                type="button"
                                className="close"
                                aria-label="Close"
                                onClick={this.toggle}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </ModalHeader>
                        <ModalBody>
                            <p>Add project name :</p>
                            <input id="project-name" />
                        </ModalBody>
                        <ModalFooter>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.toggle}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.save}
                            >
                                Save
                            </button>
                        </ModalFooter> */}
                    {/* </Modal> */}
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
        products: state.products.products,
        is_open_modal: state.isOpenModal.is_open_modal
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(ProductsHead);