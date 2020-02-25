import React , { Component } from "react";
import { Card , ListGroup , Col} from "react-bootstrap";
// import { Link } from "react-router-dom";
import Router from 'next/router'
// import 'bootstrap/dist/css/bootstrap.min.css';

class LeftMenu extends Component {
    
    render() {
        const onClickHandler = (href) => {
            return e => {
              e.preventDefault()
              Router.push(href)
            }
          }
          
          const Link = ({ children, href }) => (              
            <a href="#" onClick={onClickHandler(href)}>
              {children}
              <style jsx>{`
                a {
                  margin-right: 10px;
                }
              `}</style>
            </a>
          )
        return (
            <Col sm={3}>
                <Card>
                    <Card.Header>Menu</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link href="/">Home</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/products">Products</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/orders">Orders</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        )
    }
}
export default LeftMenu;