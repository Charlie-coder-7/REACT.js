import React, { createContext } from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
export const ProductDataContext = createContext()
const ProductContext = (props) => {
      const [productData, setProductData] = useState([]);
      const getdata = async () => {
        const response = await axios.get("https://fakestoreapi.com/products/");
        setProductData(response.data);
      };
      useEffect(function () {
        getdata();
      }, []);
  return (
    <div>
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext