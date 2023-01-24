import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from "@reach/router";
import{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();

    const [data,setData]=useState([]);
    // console.log(data);
    useEffect(()=>{
      FetchData();
    },[])

    const FetchData = () => {
        fetch(`https://dummyjson.com/products`)
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            setData(actualData.products);
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

  return (
    <div>
    <h1 className='text-center text-info'>OUR PRODUCTS</h1>
    <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>
   
    <div className='row'>
    {data.map((item,index)=>{
        return(
         
      <div className='col-md-3'style={{margin:'45px'}}>
      <div className="card" style={{height: '32rem',width:'21rem'}} key={index}>     
      <img src={item.thumbnail} style={{ objectFit: 'cover',width: '20rem',
      height: '15rem' }} className ="card-img-top" alt="..."/>
     <div className="card-body" style={{height:'75px'}}>
     <h5 className="card-title">{item.title}</h5>
     <h5 className='card-price'><CurrencyRupeeIcon/>
     {item.price}</h5>
     <p>{item.description}</p>
     
     <Button variant="outline-info" onClick={() => navigate('/login')}>BUY NOW</Button>
    

    
</div>
</div>
</div>
     
    
    )})}
</div></div></div>

);
}


export default Product;
