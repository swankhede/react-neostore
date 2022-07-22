import "./App.css";
import Home from "./pages/Home";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  
  );
}

export default App;
