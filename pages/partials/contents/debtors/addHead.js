import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import withRedux from "next-redux-wrapper";
import { initStore } from "../../../../redux/store";
import { dispatchActions } from "../../../../redux/actions";
import { NEW_DEBTOR, MESSAGE_SHOWED } from "../../consts/actionsConstants";
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
    let newDebtor = {};

    newDebtor['name'] = $('#name').val();
    newDebtor['description'] = $('#description').val();
    newDebtor['amount'] = $('#amount').val();
    newDebtor['date'] = $('.datepicker-input').val();
    console.log('komail',newDebtor);
    
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
    let {messageShowed} = this.props.messageShowed;

    if (this.props.newDebtor) {  
      let {message, success} = this.props.newDebtor;
      
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
const mapStateToProps = (state) => {
    return {
      messageShowed: state.messageShowed,
      newDebtor:state.debtors.newDebtor
    }
}
export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(AddHead);
