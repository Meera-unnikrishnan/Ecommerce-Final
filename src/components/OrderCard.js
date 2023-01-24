import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import {Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const OrderCard = (props) => {
    const navigate = useNavigate();
    const [theme] = useThemeHook();
    const {
        isEmpty,
        items,
        cartTotal}=useCart();
    return (
        <>
        {items.map((item, index)=>{
            return(
       <Card className={`${theme? 'bg-light-black text-light' : 'bg-light text-black'} mb-3`} border={theme? 'warning' : 'primary'}>
            <Card.Header>
                <b>{props.orderDate}</b>
                <small className="float-end">Order ID: {item.id}</small>
            </Card.Header>
            <Row className="p-2">
                <Col xs={3} sm={2}>
                    <Card.Img variant="top" src={item.thumbnail} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        {item.description}
                        <Card.Text>
                            <Badge pill bg="danger">
                                Not confirmed
                            </Badge>
                            <br/>
                            Rs.{item.price}<br/>
                            Quantity:{item.quantity}<br/>
                            Total: {item.itemTotal}
                           
                        </Card.Text>
                    </Card.Body>
                </Col>
               
            </Row>
            
       </Card>
       
    
            )
        })}
        </>
    );
};

export default OrderCard;