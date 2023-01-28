import React, { useContext, useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";
import {BiCart } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";
import logo from "../images/E-kart-logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import CategoryIcon from "@mui/icons-material/Category";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  const navigate = useNavigate();

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode);
    
  }, [darkMode]);

  const { isEmpty, totalItems } = useCart();
  let User=sessionStorage.getItem('Name');
  User=User.toUpperCase();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container>
       
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
          
            <img src={logo} onClick={() => navigate(-1)} style={{ width: "150px", height: "50px",cursor:'pointer'}}></img>
           
          </Navbar.Brand>
        
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',marginLeft:'450px'}}>
        <b><center style={{color:'orange'}}>WELCOME {User}</center></b>
        </div>
          <Nav className="ms-auto">
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkMode(darkMode)}
            >
              {darkMode}
            </Nav.Link>
            <Link
              to="/category"
              className={`nav-link ${
                darkMode ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              <CategoryIcon size="1.8rem" />
              &nbsp;Category
            </Link>
            <Link
              to="/cart"
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
            >
              <BiCart size="2rem" color="grey"/>
              {!isEmpty && (
                <span
                  style={{ position: "relative", left: "-21px", top: "-18px" }}
                >
                  {totalItems}
                </span>
              )}
              
            </Link>
            <Link
              to="my-account"
              className={`nav-link ${
                darkMode ? "text-dark-primary" : "text-light-primary"
              }`}
            >
              <VscAccount size="1.8rem" />
              &nbsp;
            </Link>
            <Link
              to="/"
              className={`nav-link ${
                darkMode ? "text-dark-primary" : "text-light-primary"
              }`}
            >
            
              <LogoutIcon size="1.8rem"/>
              &nbsp;Logout
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
