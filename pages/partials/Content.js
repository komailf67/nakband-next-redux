import React, { Component } from "react";
import { Col, Card } from 'react-bootstrap';

class Content extends Component {
    render() {
        console.log(this.props);
        
        return (
            <Col sm={9}>
                <Card >
                    <Card.Header>Content</Card.Header>
                    <Card.Body>
                        
                    </Card.Body >
                </Card>
            </Col>
        )
    }
}
export default Content;