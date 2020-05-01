import React , { Component } from "react";
import { Card , ListGroup , Col} from "react-bootstrap";
// import { Link } from "react-router-dom";
import Router from 'next/router'
// import 'bootstrap/dist/css/bootstrap.min.css';

class RightMenu extends Component {
    
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
            <Col sm={2} className="text-right">
                <Card>
                    <Card.Header>منو</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link href="/">Home</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/storage/products">انبار</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/storage/add">اضافه کردن محصول</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/sales/invoices">فاکتورهای فروش</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/services/add">اضافه کردن سرویس</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/services/services">لیست سرویس ها</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/expenses/add">اضافه کردن هزینه</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/expenses/expenses">لیست هزینه ها</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/salaries/salaries">حقوق ها</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link href="/debtors/debtors">بدهکارها</Link>
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
export default RightMenu;