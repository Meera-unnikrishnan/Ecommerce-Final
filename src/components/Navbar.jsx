import React from 'react';
import styled from 'styled-components'
import {Search,ShoppingCartOutlined} from "@mui/icons-material";
import Badge from '@mui/material/Badge';
import Nav from "react-bootstrap/Nav";
import logo from '../images/E-kart-logo.png'
// import Navbar from "react-bootstrap/Navbar";



const Container = styled.div`
        height:80px;
       
`;
const Wrapper=styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;  
    align-items:center;
`;
const Center=styled.div`
    flex:1;
    text-align:center; 
`;
const Logo = styled.h1`
    font-weight:bold;
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    
`

const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;


const SearchContainer=styled.div`
    border  :0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input = styled.input`
border:none;
`
const Right=styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    `
   
;
const NavBar = () => {
 
  return (
    
    <Container>
    <Wrapper>
      <Left>
      
      <img src={logo} style={{width:"150px",height:"50px"}}></img>
     
      </Left>
      <Center><Logo>E-KART</Logo></Center>
      <Right>
      <Nav>
      <Nav.Link href="registration" className="nav-links"style={{color:'black'}}><MenuItem>REGISTER</MenuItem></Nav.Link>
      <Nav.Link href="login" className="nav-links"style={{color:'black'}} ><MenuItem>SIGNIN</MenuItem></Nav.Link>
      </Nav>
      
      </Right>
    </Wrapper>
    </Container>
   
  );
}

export default NavBar;
