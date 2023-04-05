import { createContext, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

function Provider({ children }) {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const response = await axios.get("http://localhost:3001/products/");
    setProduct(response);
  };
  const ProductInfo = {
    product,
    fetchProduct,
  };

  return (
    <ProductContext.Provider value={ProductInfo}>
      {children}
    </ProductContext.Provider>
  );
}
export { Provider };
export default ProductContext;
