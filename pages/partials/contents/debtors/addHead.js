import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { dispatchActions } from "../../../../redux/actions";
import { NEW_DEBTOR, MESSAGE_SHOWED } from "../../consts/actionsConstants";
import $ from "jquery";
import {connect} from "react-redux";
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
    let newDebtor = {};

    newDebtor['name'] = $('#name').val();
    newDebtor['description'] = $('#description').val();
    newDebtor['amount'] = $('#amount').val();
    newDebtor['date'] = $('.datepicker-input').val();

    //check all fields filled
    let formFilled = true;
    $.each(newDebtor, function(key, value) {
      if (!value || value == 0) {
        alert('پر کردن همه فیلدها الزامی است');
        formFilled = false;
        return false;
      }
    });

    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/debtors', NEW_DEBTOR, newDebtor);
    }
  }

  render() {
    return (
      <Form>
        <Form.Row className="uncommon-inputs">
          <Form.Group as={Col}>
            <Form.Label>نام و نام خانوادگی</Form.Label>
            <Form.Control type="text" id="name" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>توضیحات</Form.Label>
            <Form.Control type="text" id="description" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>مبلغ بدهی</Form.Label>
            <Form.Control id="amount" />
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

export default connect(null, mapDispatchToProps)(AddHead);
