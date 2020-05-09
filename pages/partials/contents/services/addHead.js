import React, { Component } from 'react';
import { Form, Container, Row, Button, Card, ListGroup, Col } from 'react-bootstrap';
import {connect} from "react-redux";
import { products, dispatchActions } from "../../../../redux/actions";
import { NEW_SERVICE, MESSAGE_SHOWED } from "../../consts/actionsConstants";
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
    let newService = {};

    newService['category'] = $('#category').val();
    newService['title'] = $('#title').val();
    newService['date'] = $('.datepicker-input').val();
    newService['total_amount'] = $('#total-amount').val();
    newService['shop_share'] = $('#shop-share').val();

    //check all fields filled
    let formFilled = true;
    $.each(newService, function(key, value) {
      if (!value || value == 0) {
        alert('پر کردن همه فیلدها الزامی است');
        formFilled = false;
        return false;
      }
    });

    if (formFilled) {
      this.props.fetchData('http://127.0.0.1/api/services', NEW_SERVICE, newService);
    }
  }

  render() {
    let {messageShowed} = this.props.messageShowed;
    if (this.props.newService) {  
      let {message, success} = this.props.newService;
      
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
              <option>خدمات نرم افزاری</option>
              <option>خدمات سخت افزاری</option>
              <option>پورسانت فروش</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>عنوان</Form.Label>
            <Form.Control type="text" id="title" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>مبلغ کل</Form.Label>
            <Form.Control id="total-amount" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>سهم فروشگاه</Form.Label>
            <Form.Control id="shop-share" />
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
        newService: state.services.newService,
        messageShowed: state.messageShowed,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddHead);
