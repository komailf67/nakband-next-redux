import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import {connect} from "react-redux";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_SALARY, MESSAGE_SHOWED } from "../../consts/actionsConstants";
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
    let newSalary = {};

    newSalary['name'] = $('#name').val();
    newSalary['month'] = $('#month').val();
    newSalary['year'] = $('#year').val();
    newSalary['amount'] = $('#amount').val();
    newSalary['date'] = $('.datepicker-input').val();
    
    //check all fields filled
    let formFilled = true;
    $.each(newSalary, function(key, value) {
      if (!value || value == 0) {
        alert('پر کردن همه فیلدها الزامی است');
        formFilled = false;
        return false;
      }
    });
    
    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/salaries', NEW_SALARY, newSalary);
    }
  }

  render() {
    return (
      <Form>
        <Form.Row className="uncommon-inputs">
        <Form.Group as={Col} controlId="name">
            <Form.Label>دسته بندی</Form.Label>
            <Form.Control className="name" as="select">
              <option value={0}>Choose...</option>
              <option>محمد</option>
              <option>هادی</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="month">
            <Form.Label>ماه</Form.Label>
            <Form.Control className="month" as="select">
              <option value={0}>Choose...</option>
              <option value={1}>فروردین</option>
              <option value={2}>اردیبهشت</option>
              <option value={3}>خرداد</option>
              <option value={4}>تیر</option>
              <option value={5}>مرداد</option>
              <option value={6}>شهریور</option>
              <option value={7}>مهر</option>
              <option value={8}>آبان</option>
              <option value={9}>آذر</option>
              <option value={10}>دی</option>
              <option value={11}>بهمن</option>
              <option value={12}>اسفند</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="year">
          <Form.Label>سال</Form.Label>
            <Form.Control className="name" as="select">
              <option value={1399}>1399</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>مبلغ</Form.Label>
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

