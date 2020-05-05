import React , { Component } from "react";
import RightMenu from "../partials/menus/RightMenu";
import Content from "../partials/Content";
import Head from "../partials/contents/balance/balanceHead";
import {Container, Row } from "react-bootstrap";

class Balance extends Component {
  
  render(){
    return(
      <React.Fragment>
        <Container>
          <Row>
            <RightMenu />
              <Content title="موجودی مالی">
                <Head />
              </Content>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
export default Balance;
