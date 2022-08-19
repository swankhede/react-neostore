import "./App.css";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import LoginForm from "./pages/LoginForm";
import { setLoginModal } from "./redux/action";
import SignUpForm from "./pages/SignUpForm";
import CartModal from "./componets/CartModal";


function App() {
  const state=useSelector(state=>state)
  const cart=useSelector(state=>state?.cart)
  const isVisible=state?.isCartModal
  const dispatch=useDispatch()
  const handleClose=()=>{
    dispatch(setLoginModal())
  }
  return (
    
      <BrowserRouter>
       <CartModal isVisible={isVisible} cart={cart}/>
        <Navbar  />
       

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/details/:id" element={<ProductDetails/>}/>
            <Route exact path="/category/:type" element={<Category/>} />
            <Route exact path="/login" element={<LoginForm/>} />
            <Route exact path="/signup" element={<SignUpForm/>} />
          </Routes>

    </BrowserRouter>
 
  
  );
}

export default App;
