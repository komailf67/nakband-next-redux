import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import LeftMenu from "./partials/menus/LeftMenu";
import Content from "./partials/Content";
import { Card , Container , Row ,  ListGroup , Table , Col } from "react-bootstrap";
import withRedux from "next-redux-wrapper";
import { initStore , initialCards , addItem } from "../redux/store";
import {products , dispatchActions} from '../redux/actions';
import { ORDERS } from "../pages/partials/consts/actionsConstants";
import  OrdersItem  from "./partials/OrdersItem";



class Orders extends Component {

  componentDidMount = () => {
    this.props.fetchData('http://127.0.0.1:8000/api/orders/all-orders' , ORDERS);
  }
  render() {
    let {orders} = this.props;
    let rows = [];

    if (orders) {
      console.log(orders);
      rows = orders.map(order=><OrdersItem key={order.id} item={order} />);
    }

    return (
      <React.Fragment>
        <Container>
          <Row>
            <LeftMenu />
            <Col sm={9} className="text-right">
              <Card >
                <Card.Header>Content</Card.Header>
                <Card.Body>
                  <div id="storage">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>ردیف</th>
                          <th>شناسه کاربر</th>
                          <th>مبلغ</th>
                          <th>تاریخ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body >
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData: (url , actionType) => dispatch(dispatchActions(url, actionType)),
  }
}
const mapStateToProps = (state) => { 
  return {
    orders: state.orders,
  }
}
export default withRedux(initStore , mapStateToProps, mapDispatchToProps)(Orders);