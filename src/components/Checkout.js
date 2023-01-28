import React from "react";
// import "./checkout.css";
import { Button} from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useNavigate } from "react-router-dom";
import Navbar from "./Nav";
import { useState, useEffect } from "react";
import { navigate } from "@reach/router";




function Checkout() {
  let User=sessionStorage.getItem('Name');
  let Email=sessionStorage.getItem('username');
  const navigate = useNavigate();
  const {
    isEmpty,
    items,
    emptyCart,updateItemQuantity,removeItem,
    cartTotal,totalItems}=useCart()
    console.log(items);
    const Myorder= ()=>{
      console.log('hi')
        alert('Checkout Successfully')
        emptyCart();
        navigate('/home')
    }
    
  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
            <h6 className="text-uppercase">Personal details</h6>
            <label>Name:{User}</label>
            <label>Email:{Email}</label><br/>
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3">
                {" "}
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required="required"
                />{" "}
                <span>Name on card</span>{" "}
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2">
                    {" "}
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required="required"
                    />{" "}
                    <i className="fa fa-credit-card"></i> <span>Card Number</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Expiry</span>{" "}
                    </div>

                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>CVV</span>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Street Address</span>{" "}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>City</span>{" "}
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>State/Province</span>{" "}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <span>Zip code</span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 mb-4 d-flex justify-content-between">
            <button onClick={() => navigate(-1)} className="btn btn-danger px-3">Cancel</button>
            <button onClick={()=> Myorder()} className="btn btn-success px-3">Pay Rs.{cartTotal}</button>
            </div>
          </div>


          <div className="col-md-4">
          {items.map((item, index)=>{
            return(
              <>
              <div className="card" style={{width:'200px'}}>
                <p key={index}/>
                <img src={item.thumbnail} style={{ width: '4rem'}}></img>
                <label>{item.title}</label>
                <label>Rs.{item.price}</label>
                <label>Quantity: {item.quantity}</label>
                <div>
                <Button style={{width:'50%'}} onClick={()=> updateItemQuantity(item.id, item.quantity - 1)} className="ms-2">-</Button>
                <Button style={{width:'50%'}} onClick={()=> updateItemQuantity(item.id, item.quantity + 1)} className="ms-2">+</Button>
                <Button variant="danger" onClick={()=> removeItem(item.id)} className="ms-2">Remove Item</Button>
                </div>
                </div>
                </>
                )
              })}
            <div className="card" style={{width:'200px'}}>
              <b><span>You have to pay</span></b>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">RS.{cartTotal}</h1>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Checkout;
