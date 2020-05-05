import React, { Component } from 'react';
import { Form, Button, Col, FormControl, InputGroup } from 'react-bootstrap';
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_BALANCE, MESSAGE_SHOWED } from "../../consts/actionsConstants";
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
    let newBalance = {};

    newBalance['cash'] = $('#cash').val();
    newBalance['bank'] = $('#bank').val();
    newBalance['unrecorded'] = $('#unrecorded').val();
    newBalance['description'] = $('#description').val();
    newBalance['date'] = $('.datepicker-input').val();
    
    console.log('komail',newBalance);
    
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
    let {messageShowed} = this.props.messageShowed;

    if (this.props.newBalance) {  
      let {message, success} = this.props.newBalance;
      
      if (!messageShowed) {
        alert(message);
        this.props.fetchData('', MESSAGE_SHOWED, 1);
      }   
      if (success) {
        $('form').find("input").val("");
        $('form').find("textarea").val("");
      } 
    }
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
const mapStateToProps = (state) => {
    return {
      messageShowed: state.messageShowed,
      newBalance:state.balances.newBalance
    }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddHead);
