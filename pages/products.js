import React , { Component } from "react";
import { Card , Container , Row ,  ListGroup , Table , Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftMenu from "./partials/menus/LeftMenu";
import Content from "./partials/Content";
import { Route as Router } from "react-router-dom";
import axios from "axios";
import 'isomorphic-unfetch';
import Link from "next/link";
import {getProducts} from "../data/productsData";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux/store";
import {products , dispachActions} from '../redux/actions';

import { bindActionCreators } from 'redux';
import  ProductsItem  from "./partials/ProductsItem";
import { PRODUCTS } from "../pages/partials/consts/actionsConstants";
class Products extends Component {

  // static async getInitialProps ({ store }) {
  //   store.dispatch(products());
  // }

  // static async getInitialProps() {
  //   let res = await fetch('http://127.0.0.1:8000/api/products/all-products')
  //   let contriesObj = await res.json()
  //   return {countries: contriesObj}
  // }
  
  componentDidMount =()=>{
    this.props.fetchData('http://127.0.0.1:8000/api/products/all-products' ,  PRODUCTS);
  }
  render(){
    let {products} = this.props;
    let rows = [];

    if (products) {
      rows = this.props.products.map(product=><ProductsItem key={product.id} item={product} />);
    }

    return(
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
                          <th>نام محصول</th>
                          <th>قیمت خرید</th>
                          <th>تعداد</th>
                          <th>تاریخ خرید</th>
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
  return {
    fetchData: (url , actionType) => dispatch(dispachActions(url , actionType)),

      // initialCards: bindActionCreators(initialCards, dispatch),
      // addItem: bindActionCreators(addItem, dispatch),
      komail: bindActionCreators(products, dispatch)
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  
  return {
    products: state.products,
  }
}
export default withRedux(initStore , mapStateToProps, mapDispatchToProps)(Products);