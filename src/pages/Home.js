import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingModal from "../componets/LoadingModal";
import Navbar from "../componets/Navbar";
import ProductCard from "../componets/ProductCard";
import { setLoading } from "../redux/action";

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch()
    const isLoading =useSelector(state=>state?.isLoading)
    console.log("isLoading",isLoading)

  useEffect(() => {
      dispatch(setLoading(true))
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProducts(json);
          dispatch(setLoading(false))
          
        });
    } catch (e) {
        dispatch(setLoading(false))
      console.log("Error", e);
    }
  }, []);

  return (
    <div className="container-fluid">
        
      <div className="container">
        <div className="row gx-2 gy-2">
            {
                isLoading?<LoadingModal/>:
                products.length > 0
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null
            }
          
        </div>
      </div>
    </div>
  );
}
