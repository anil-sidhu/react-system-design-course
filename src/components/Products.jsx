import { useEffect } from "react"
import { productList } from "../services/productServices"

function Products() {

  useEffect(() => {
    getProductList()
  }, [])

  const getProductList = async () => {
    let products = await productList(30);
    console.log(products);
  }
  return (
    <>
      <h1 style={{textAlign:'right'}} >Product List</h1>
    </>
  )
}

export default Products
