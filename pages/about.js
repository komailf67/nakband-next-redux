import React , { Component } from "react";
import { Card , Container , Row ,  ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftMenu from "./partials/menus/LeftMenu";
import Content from "./partials/Content";
import { Route as Router } from "react-router-dom";
import axios from "axios";
import 'isomorphic-unfetch';
import Link from "next/link";


class About extends Component {
  // static async getInitialProps() {
  //   let res = await fetch('http://127.0.0.1:8000/api/products/all-products')
  //   let contriesObj = await res.json()
  //   return {countries: contriesObj}
  // }
  render(){

    // console.log(this.props.countries);
    
    return(
      <React.Fragment>
        <Container>
          <Row>
            <LeftMenu />
            <Content komail={'ssss'} />
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
export default About;