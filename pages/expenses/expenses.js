import React , { Component } from "react";
import RightMenu from "../partials/menus/RightMenu";
import Content from "../partials/Content";
import Head from "../partials/contents/expenses/expensesHead";
import {Container, Row } from "react-bootstrap";

class Expenses extends Component {
  
  render(){
    return(
      <React.Fragment>
        <Container>
          <Row>
            <RightMenu />
              <Content title="لیست هزینه ها">
                <Head />
              </Content>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
export default Expenses;
