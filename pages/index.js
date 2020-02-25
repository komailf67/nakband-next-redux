import React , { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftMenu from "./partials/menus/LeftMenu";
import { Card , Container , Row , Col } from "react-bootstrap";

class Index extends Component {

  render(){
    return(
      <React.Fragment>
          <Container>
            <Row>
              <LeftMenu />
              <Col sm={9}>
              <Card >
                <Card.Header>Content</Card.Header>
                <Card.Body>
                  <h1>Wellcome</h1>
                </Card.Body >
              </Card>
            </Col>
            </Row>
          </Container>
      </React.Fragment>
    )
  }
}
export default Index;