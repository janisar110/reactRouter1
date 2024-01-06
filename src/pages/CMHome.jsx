import axios from "axios";
import React, { useEffect, useState } from "react";
import CMCards from "../components/CMCards";
import CMHeader from "../components/CMHeader";
import CMFooter from "../components/CMFooter";

const CMHome = () => {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    // console.log("first time");
    // fetch("https://fakestoreapi.com/productssdsaasdsadad")
    //   .then((res) => res.json()) //convert data into json
    //   .then((response) => {
    //     console.log("response", response);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      // console.log(response.data.products, "response");
      setProductData(response.data.products);
    } catch (error) {
      console.log("error", error);
    }
  };

  // console.log("productData", productData);
  return (
    <>
    <CMHeader/>
    <div className="my-10">
    <div className="grid grid-cols-5 max-w-[1536px] mx-auto my-3">
      {productData?.map((product, index) => {
        console.log(product, "product map");
        return (
          <CMCards
            title={product.title}
            desc={product.description}
            image={product.images[0]}
            id={product.id}
          />
        );
      })}
      

    </div>
    </div>
    <CMFooter/>
    </>
  );
};

export default CMHome;
