import React, { Component } from 'react';
import { Form, Button, Col, FormControl, InputGroup } from 'react-bootstrap';
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_TRANSACTION, MESSAGE_SHOWED } from "../../consts/actionsConstants";
import $ from "jquery";
import DatePicker from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
// import 'react-datepicker2/src/style.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../../styles.css';




class AddHead extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    }
  }

  submitForm = () => {
    let newTransaction = {};

    newTransaction['transaction_number'] = $('#transaction-number').val();
    newTransaction['description'] = $('#description').val();
    newTransaction['amount'] = $('#amount').val();
    newTransaction['balance'] = $('#balance').val();
    newTransaction['date'] = $('.datepicker-input').val();

    //check all fields filled
    let formFilled = true;
    $.each(newTransaction, function (key, value) {
      if (!value || value == 0) {
        alert('پر کردن همه فیلدها الزامی است');
        formFilled = false;
        return false;
      }
    });
    
    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/transactions', NEW_TRANSACTION, newTransaction);
    }
  }

  render() {
    let { messageShowed } = this.props.messageShowed;

    if (this.props.newTransaction) {
      let { message, success } = this.props.newTransaction;

      if (!messageShowed) {
        alert(message);
        this.props.fetchData('', MESSAGE_SHOWED, 1);
      }
      if (success) {
        $('form').find("input").val("");
        $('#category').prop('selectedIndex', 0);
      }
    }
    return (
      <Form>
        <Form.Row className="uncommon-inputs">
          <Form.Group as={Col}>
            <Form.Label>شماره تراکنش</Form.Label>
            <Form.Control type="text" id="transaction-number" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>مبلغ(ریال)</Form.Label>
            <Form.Control type="text" id="amount" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>موجودی(ریال)</Form.Label>
            <Form.Control id="balance" />
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

        <Form.Row className="description">

          <Form.Label>توضیحات</Form.Label>
          <InputGroup>
            <FormControl as="textarea" aria-label="With textarea" id="description"/>
          </InputGroup>
        </Form.Row>
        <Button variant="primary" type="button" onClick={this.submitForm}>
          Add New
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
    messageShowed: state.messageShowed,
    newTransaction: state.transactions.newTransaction
  }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddHead);
