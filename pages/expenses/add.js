import React, { Component } from "react";
import RightMenu from "../partials/menus/RightMenu";
import Content from "../partials/Content";
import AddHead from "../partials/contents/expenses/addHead";
import { Container, Row } from 'react-bootstrap';


class Add extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <RightMenu />
            <Content title="اضافه کردن هزینه جدید" >
              <AddHead />
            </Content>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Add;