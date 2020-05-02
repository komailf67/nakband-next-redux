import React , { Component } from "react";
import RightMenu from "../partials/menus/RightMenu";
import Content from "../partials/Content";
import Head from "../partials/contents/investors/investorsHead";
import {Container, Row} from "react-bootstrap";

class Investors extends Component {
  
  render(){
    return(
      <React.Fragment>
        <Container>
          <Row>
            <RightMenu />
              <Content title="شرکا">
                <Head />
              </Content>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}
export default Investors;
