
// import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import NavBar from "./components/Navbar";
import Login from './pages/Login'
import CustomerRegistration from './pages/CustomerRegistration';
import Landing from "./pages/LandingPage";
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from "./pages/ProductDetails";
import MyAccount from "./pages/MyAccount";
import Category from "./components/Category";
import Checkout from "./components/Checkout"


// import Header from './components/Header';
function App() {
  const [theme] = useThemeHook();
 
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
    <Router>
      <Routes>
        <Route path='/' exact element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<CustomerRegistration/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/product-details/:productId" element={< ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
      </Routes>
    </Router>
    </main>
  );
}

export default App;