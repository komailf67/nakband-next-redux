import React, { Component } from 'react';
import { Form, Button, Col, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from "react-redux";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_BALANCE, MESSAGE_SHOWED } from "../../consts/actionsConstants";
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
    let newBalance = {};

    newBalance['cash'] = $('#cash').val();
    newBalance['bank'] = $('#bank').val();
    newBalance['unrecorded'] = $('#unrecorded').val();
    newBalance['description'] = $('#description').val();
    newBalance['date'] = $('.datepicker-input').val();

    //check all fields filled
    let formFilled = true;
    $.each(newBalance, function(key, value) {
      if (key != 'description') {
        if (!value || value == 0) {
          alert('پر کردن همه فیلدها الزامی است');
          formFilled = false;
          return false;
        }
      }
    });

    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/balances', NEW_BALANCE, newBalance);
    }
  }

  render() {
    return (
      <Form>
        <Form.Row className="uncommon-inputs">
          <Form.Group as={Col}>
            <Form.Label>پول نقد (تومان)</Form.Label>
            <Form.Control type="text" id="cash" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>موجودی بانک (تومان)</Form.Label>
            <Form.Control type="text" id="bank" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>مجموع تراکنش های ثبت نشده	</Form.Label>
            <Form.Control id="unrecorded" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>تاریخ موجودی</Form.Label>
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

export default connect(null, mapDispatchToProps)(AddHead);
