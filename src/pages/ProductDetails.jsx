import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CMHeader from "../components/CMHeader";
import CMFooter from "../components/CMFooter";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("params", id);

  useEffect(() => {
    getSingleData();
  }, []);
  const [product, setProduct] = useState(null);
  const getSingleData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${id}`
      );

        // console.log("response getSingleData", response.data.products);
      setProduct(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(product, "product");

  return (
    <>
    <CMHeader/>
    <div className="flex justify-center  my-10">
    <div className="grid grid-cols-1 shadow-2xl">
      <h1 className="text-center my-5">ProductDetails</h1>
        <div>
      <img src={product?.images[0]} alt="" />

        </div>
        <div className="text-3xl m-2">
       {product?.title} 

        </div>
        
        <div className="m-2 mx-4">
       {product?.description}
       
        </div>
        <div className=" m-2">
        <span className="text-xl font-semibold m-2"> Price :</span>{product?.price} 

        </div>
        <div className="m-2">
        <span className="text-xl font-semibold m-2"> Category :</span>{product?.category}
       
        </div>
        <div className="m-2">
       <span className="text-xl font-semibold m-2">Ratings :</span>{product?.rating}
        </div>
      </div>
      
      </div>
      <CMFooter/>
    </>
  );
};

export default ProductDetails;