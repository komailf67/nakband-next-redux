import React , { Component } from "react";
import LeftMenu from "../partials/menus/LeftMenu";
import { Card , Container , Row , Col } from "react-bootstrap";
// import './styles.css';

class Index extends Component {

  render(){
    return(
      <React.Fragment>
          <Container>
            <Row>
              <LeftMenu />
              <Col sm={9} className="text-right">
              <Card >
                <Card.Header>Content</Card.Header>
                <Card.Body>
                  <h1>انبار</h1>
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