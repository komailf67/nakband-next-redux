import React, * as react from "react";
import { Form, Container, Row, Button, Card, ListGroup , Col } from 'react-bootstrap';
import $ from 'jquery';
import LeftMenu from "../partials/menus/LeftMenu";

class Add extends react.Component {
    componentDidMount = () => {
        //START jquery functions
            //delete row
            $(document).on('click', '.btn-danger', function () {
                $(this).parents('.uncommon-inputs').remove();
            })
        //END jquery functions
    }

    addNewProductInputs = () => {
        let uncommonInputs = $(".uncommon-inputs");       
        $(uncommonInputs[0]).clone().insertAfter(uncommonInputs[0]);
        $(document).find('button.new-product').each(function(index,value){
            if(index>0) {
                console.log($(this).attr('calss'));
                $(this).removeClass('btn-success').addClass('btn-danger');
                $(this).html('-');
            }
        });       
    }

    render() {
        return (
            <React.Fragment>
          <Container>
            <Row>
              <LeftMenu />
              <Col sm={9} className="text-right">
              <Card >
                <Card.Header>Content</Card.Header>
                <Card.Body>
                <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="seller">
                        <Form.Label>نام فروشنده</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="invoice-number">
                        <Form.Label>شماره فاکتور</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="phone-number">
                        <Form.Label>شماره تماس</Form.Label>
                        <Form.Control type="phone-number" placeholder="" />
                    </Form.Group>
                </Form.Row>
                <Form.Row className="uncommon-inputs">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>دسته بندی</Form.Label>
                        <div className="d-flex">
                            <Button className="ml-1 new-product"
                            onClick={(event) => {
                                this.addNewProductInputs()
                            }}
                             variant="success">+</Button>{' '}
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formاااااGridCity">
                        <Form.Label>توضیح مدل</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>تعداد</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>قیمت خرید</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>تاریخ خرید</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Card.Body >
              </Card>
            </Col>
            </Row>
          </Container>
      </React.Fragment>
            
        )
    }
}

export default Add;