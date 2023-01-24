import React from 'react';
import { Button, Container, Col, Row, Table} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsCartCheck, BsCartX} from 'react-icons/bs';
import Navbar from '../components/Nav';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [theme] = useThemeHook();
    const navigate = useNavigate();
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <>
        <Navbar/>
        <Container className="">
            <h1 className={`${theme? 'text-light': 'text-light-primary'} my-5 text-center`} style={{color:'green'}}>
                {isEmpty? 'Your Cart is Empty' : 'Cart'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme? 'dark': 'light'} className="mb-5">
                    <tbody>
                        {items.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <div style={{ background: 'white', height: '8rem', overflow: 'hidden', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ padding: '.5rem'}}>
                                                <img src={item.thumbnail} style={{ width: '4rem'}} alt={item.title} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{ whiteSpace: 'nowrap', width: '14rem', overflow: 'hidden', textOverFlow: 'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>Rs. {item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                                        <Button onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <Button onClick={()=>navigate('/checkout')}>Checkout</Button>
                </Table>
                
                {!isEmpty &&
                    <Row 
                        style={{ position: 'fixed', bottom: 0}}
                        className={`${theme? 'bg-light-black text-light' : 'bg-light text-balck'} justify-content-center w-100`}
                    >
                        <Col className="py-2" style={{background:'lightblue'}}>
                            <h4><b>Total Price: Rs. {cartTotal}</b></h4>
                        </Col>
                        
                        <Col className="p-0" style={{background:'lightblue'}} md={2}>
                            <Button variant="danger"
                                className="py-2 m-2"
                                onClick={()=> emptyCart()}
                            >
                                <BsCartX size="1.7rem" />
                                Clear Cart
                            </Button>
                            
                        </Col>
                    </Row>}
            </Row>
        </Container>
        </>
    );
};

export default Cart;