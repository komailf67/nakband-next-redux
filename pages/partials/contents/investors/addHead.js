import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import {connect} from "react-redux";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_INVESTOR_SALARY, INVESTORS, MESSAGE_SHOWEDخب  } from "../../consts/actionsConstants";
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
    let newInvestorSalary = {};

    newInvestorSalary['name'] = $('#name').val();
    newInvestorSalary['description'] = $('#description').val();
    newInvestorSalary['amount'] = $('#amount').val();
    newInvestorSalary['date'] = $('.datepicker-input').val();
    
    //check all fields filled
    let formFilled = true;
    $.each(newInvestorSalary, function(key, value) {
      if (!value || value == 0) {
        alert('پر کردن همه فیلدها الزامی است');
        formFilled = false;
        return false;
      }
    });
    
    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/investors-salaries', NEW_INVESTOR_SALARY, newInvestorSalary);
    }
  }

  render() {
    return (
      <Form>
        <Form.Row className="uncommon-inputs">
        <Form.Group as={Col} controlId="name">
            <Form.Label>نام</Form.Label>
            <Form.Control className="name" as="select">
              <option value={0}>Choose...</option>
              <option>سعید</option>
              <option>کمیل</option>
              <option>مرضیه</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="description">
              <Form.Label>توضیحات</Form.Label>
              <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>میزان برداشت</Form.Label>
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

