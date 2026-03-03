// useProducts.js
import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([{ id: 1, title: "Laptop" }]);
  }, []);

  const handleSelect = (product) => {
    console.log("Selected:", product);
    // API call / analytics / business logic
  };

  return { products, handleSelect };
}