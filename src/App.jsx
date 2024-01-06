import { useEffect, useState } from "react";
import axios from "axios";
import CMHome from "./pages/CMHome";
import CMCards from "./components/CMCards";
import ProductDetails from "./pages/productDetails";
import { Route, Routes } from "react-router-dom";
import CMHeader from "./components/CMHeader";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<CMHome />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
