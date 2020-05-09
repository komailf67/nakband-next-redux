import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import {connect} from "react-redux";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_EXPENSE, MESSAGE_SHOWED } from "../../consts/actionsConstants";
import $ from "jquery";
import dynamic from "next/dynamic";
const DatePicker = dynamic(()=> import('react-datepicker2'),{ssr:false});
const momentJalaali = dynamic(()=> import('moment-jalaali'),{ssr:false});




class AddHead extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  submitForm = () => {
    let newExpense = {};

    newExpense['category'] = $('#category').val();
    newExpense['description'] = $('#description').val();
    newExpense['total_amount'] = $('#total-amount').val();
    newExpense['invoice_number'] = $('#invoice-number').val();
    newExpense['date'] = $('.datepicker-input').val();

    //check all fields filled
    let formFilled = true;
    $.each(newExpense, function(key, value) {
      if (!value || value == 0) {
        alert('پر کردن همه فیلدها الزامی است');
        formFilled = false;
        return false;
      }
    });

    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/expenses', NEW_EXPENSE, newExpense);
    }
  }

  render() {
    let {messageShowed} = this.props.messageShowed;

    if (this.props.newExpense) {  
      let {message, success} = this.props.newExpense;
      
      if (!messageShowed) {
        alert(message);
        this.props.fetchData('', MESSAGE_SHOWED, 1);
      }   
      if (success) {
        $('form').find("input").val("");
        $('#category').prop('selectedIndex',0);
      } 
    }
    return (
      <Form>
        <Form.Row className="uncommon-inputs">
          <Form.Group as={Col} controlId="category">
            <Form.Label>دسته بندی</Form.Label>
            <Form.Control className="category" as="select">
              <option value={0}>Choose...</option>
              <option>هزینه روزانه</option>
              <option>قبض</option>
              <option>کرایه مغازه</option>
              <option>خدمات</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>توضیحات</Form.Label>
            <Form.Control type="text" id="description" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>مبلغ</Form.Label>
            <Form.Control id="total-amount" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>شماره فاکتور</Form.Label>
            <Form.Control id="invoice-number" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>تاریخ</Form.Label>
            <DatePicker
              className="form-control"
              isGregorian={false}
              value={this.state.value}
              onChange={value => this.setState({ value })}
            />
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
        fetchData: (url, actionType, data) => dispatch(dispatchActions(url, actionType, data)),
    }
}
const mapStateToProps = (state) => {
    return {
        newExpense: state.expenses.newExpense,
        messageShowed: state.messageShowed,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddHead);