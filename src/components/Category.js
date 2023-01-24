import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { BsCartPlus } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
import carousal10 from "../images/carousal10.jpg";
import carousal5 from "../images/carousal5.jpg";
import carousal7 from "../images/carousal7.jpg";
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import Header from "./Header";

const Category = () => {
  const [button, setButton] = useState([]);
  const [products, setProducts] = useState([]);
  const { addItem } = useCart();
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setButton(data);
      });
  }, []);

  function productDetails(val) {
    console.log("this is", val);
    fetch(`https://dummyjson.com/products/category/${val}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      });
  }

  const addToCart = (val) => {
    addItem(val);
  };

  return (
    <>
      <Header />

      <div style={{ marginTop: "80px" }}>
        <div>
          {button.map((val, key) => {
            return (
              <input
                type="button"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  borderColor: "white",
                  width: "145px",
                  padding: "2px",
                  margin: "3px",
                }}
                onClick={() => productDetails(val)}
                key={key}
                value={val}
              />
            );
          })}
        </div>

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal10} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal5} alt="Second slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={carousal7} alt="Third slide" />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <>
          <div className="container">
            <div className="row text-center">
              {products.map((val, key) => {
                return (
                  <div className="col-md-3 mt-5">
                    <div
                      className="card"
                      style={{ height: "32rem", width: "18rem" }}
                      key={key}
                    >
                      <Link to={`/product-details/${val.id}`}>
                        <div
                          style={{
                            background: "white",
                            height: "15rem",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "inherit",
                          }}
                        >
                          <div style={{ width: "12rem" }}>
                            <Card.Img
                              variant="top"
                              src={val.thumbnail}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </Link>
                      <div className="card-body" style={{ height: "75px" }}>
                        <p>{val.title}</p>
                        <p style={{ fontSize: "12px" }}>{val.description}</p>
                        <p>Rs.{val.price}</p>
                      </div>
                      <div className="card-footer" style={{ height: "55px" }}>
                        <Button onClick={() => addToCart(val)}>
                          <BsCartPlus size="1.8rem" />
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Category;
