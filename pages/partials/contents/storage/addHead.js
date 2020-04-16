import React, { Component } from 'react';
import { Form, Container, Row, Button, Card, ListGroup, Col } from 'react-bootstrap';
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import { products, dispatchActions } from "../../../../redux/actions";
import { CATEGORIES } from "../../consts/actionsConstants";
import $ from "jquery";
import DatePicker from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
// import 'react-datepicker2/src/style.min.css';




class AddHead extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: '',
            value: momentJalaali()
        }
    }

    updateCategorySelectBox = (newCategory) => {  
        console.log(newCategory);
            
        this.setState({
            category: newCategory.value
        });
    }
    
    componentDidMount = () => {
        this.props.fetchData('http://127.0.0.1/api/categories', CATEGORIES)
        //START jquery functions
        //delete row
        $(document).on('click', '.btn-danger', function () {
          $(this).parents('.uncommon-inputs').remove();
        })
        //END jquery functions

    }

    addNewProductInputs = () => {
        let uncommonInputs = $(".uncommon-inputs");
        $(uncommonInputs[0]).clone().insertAfter(uncommonInputs[0]);
        $(document).find('button.new-product').each(function (index, value) {
          if (index > 0) {
            console.log($(this).attr('calss'));
            $(this).removeClass('btn-success').addClass('btn-danger');
            $(this).html('-');
          }
        });
    }

    submitForm = () => {
        let newProduct = new Array();
        let sellerDetails = {};

        sellerDetails['sellerName'] = $('#seller').val();
        sellerDetails['invoiceNumber'] = $('#invoice-number').val();
        sellerDetails['phoneNumber'] = $('#phone-number').val();
        sellerDetails['date'] = $('.datepicker-input').val();

        newProduct.push(sellerDetails);

        $(".uncommon-inputs").each(function () {
            let item = {};
            item['catgeory-id'] = $(this).find('select.category :selected').data('category-id');
            item['description'] = $(this).find('input.description').val();
            item['count'] = $(this).find('input.count').val();
            item['buy-price'] = $(this).find('input.buy-price').val();
            // item['date'] = $(this).find('input.date').val();
            newProduct.push(item);
        });
        console.log(newProduct);
        
    }

    render() {
        let { categories } = this.props;
        let categoryRow = [];
        if (categories) {
            categoryRow = $.map(categories.data, function (value, index) {
            return [<option className="product-data" key={index} data-category-id={value.id}>{value.title}</option>]
            })
        }
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="seller">
                        <Form.Label>نام فروشنده</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="invoice-number">
                        <Form.Label>شماره فاکتور</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone-number">
                        <Form.Label>شماره تماس</Form.Label>
                        <Form.Control type="phone-number" placeholder="" />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>تاریخ خرید</Form.Label>
                        <DatePicker
                        className="form-control"
                            isGregorian={false}
                            value={this.state.value}
                            onChange={value => this.setState({ value })}
                            />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="uncommon-inputs">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>دسته بندی</Form.Label>
                        <div className="d-flex">
                            <Button className="ml-1 new-product"
                                onClick={(event) => {
                                    this.addNewProductInputs()
                                }}
                                variant="success">+</Button>{' '}
                            <Form.Control className="category" as="select" value={this.state.category} onChange={this.updateCategorySelectBox}>
                                <option>Choose...</option>
                                {categoryRow}
                            </Form.Control>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>توضیح مدل</Form.Label>
                        <Form.Control type="text" className="description"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>تعداد</Form.Label>
                        <Form.Control className="count"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>قیمت خرید</Form.Label>
                        <Form.Control className="buy-price"/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="button" onClick={this.submitForm}>
                    Submit
                </Button>
            </Form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url, actionType) => dispatch(dispatchActions(url, actionType)),
    }
}
const mapStateToProps = (state) => {
    // console.log(state);
    return {
        categories: state.categories
    }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddHead);