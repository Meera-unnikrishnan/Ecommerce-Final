import React, { useEffect, useState } from "react";
import { Container, Row, Col, InputGroup, FormControl,Button } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Home = () => {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [isTrue,setIsTrue] = useState("false");
  const [isClick,setIsClick] = useState("false");
  

  async function getResponse() {
    const res = await fetch("https://dummyjson.com/products?limit=90").then((res) =>
      res.json()
    );
    setProductData(await res.products);
  }
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    console.log(username);
    getResponse();
  }, []);
  function handleNext() {
    if(currentPage<=5){
        setCurrentPage(currentPage + 1)
        console.log('Next');
    }
    else{
        setIsTrue("true");
    }
}
function handlePrevious() {
    if(currentPage>=1){
        setCurrentPage(currentPage - 1)

    }
    else{
        setIsClick("true");
    }
}
  
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const [pageNumber, setPageNumber] = useState(0);
  const currentProducts = productData.slice(firstIndex, lastIndex)
  console.log(currentProducts)


  return (
    <>
      <Header />

      <Container className="py-4">
        <div className="container" style={{ marginTop: "5%", width: "100%" }}>
          <Slider />
        </div>
        <Row className="justify-content-center">
          <Col
            xs={10}
            md={7}
            lg={6}
            xl={4}
            className="mb-3 mx-auto text-center"
          >
            <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
              Search products
            </h1>
            <InputGroup className="mb-3">
              <InputGroup.Text
                className={
                  theme
                    ? "bg-black text-dark-primary"
                    : "bg-light text-light-primary"
                }
              >
                <BiSearch size="2rem" />
              </InputGroup.Text>
              <FormControl
                placeholder="Search"
                value={searchInput}
                onChange={(e) => {setSearchInput(e.target.value);
                }}
                
                className={
                  theme ? "bg-light-black text-light" : "bg-light text-black"
                }
              />
            </InputGroup>
          </Col>
          <SearchFilter
            value={searchInput}
            data={currentProducts}
            renderResults={(results) => (
              <Row className="justify-content-center">
                {results.map((item, i) => (
                  <ProductCard data={item} key={i} />
                ))}
              </Row>
            )}
          />
        </Row>
      </Container>
      <div className='pages' style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'5px'}}>
      <Stack spacing={2}>
      <Pagination count={6} page={currentPage}/>
      </Stack>
      <Button variant="warning" size="lg" style={{margin:'10px'}} className="previous"  onClick={handlePrevious}>Previous</Button> 
      <Button variant="success" size="lg" className="next"  onClick={handleNext}>Next</Button>           
       </div>
    </>
  );
};

export default Home;
