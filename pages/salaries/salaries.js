import React , { Component } from "react";
import RightMenu from "../partials/menus/RightMenu";
import Content from "../partials/Content";
import Head from "../partials/contents/salaries/salariesHead";
import {Container, Row} from "react-bootstrap";

class Salaries extends Component {
  
  render(){
    return(
      <React.Fragment>
        <Container>
          <Row>
            <RightMenu />
              <Content title="حقوق ها">
                <Head />
              </Content>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
export default Salaries;
