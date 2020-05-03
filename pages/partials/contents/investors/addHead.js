import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_INVESTOR_SALARY, INVESTORS, MESSAGE_SHOWEDخب  } from "../../consts/actionsConstants";
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
      value: momentJalaali(),
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
    let {messageShowed} = this.props.messageShowed;
    console.log('kom', this.props.newInvestorSalary);
    
    if (this.props.newInvestorSalary) {  
      let {message, success} = this.props.newInvestorSalary;
      
      if (!messageShowed) {
        alert(message);
        this.props.fetchData('', MESSAGE_SHOWED, 1);
      }   
      if (success) {
        $('form').find("input").val("");
      } 
    }
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
const mapStateToProps = (state) => {
    return {
      messageShowed: state.messageShowed,
      newInvestorSalary:state.investorsSalaries.newInvestorSalary
    }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddHead);
