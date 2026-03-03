import { useEffect, useState } from "react"
import { productList } from "../services/productServices"
import DisplayProducts from "./DisplayProducts"

function Products() {

    const [productListData, setProductListData] = useState([])
    useEffect(() => {
        getProductList()
    }, [])



    const getProductList = async () => {
        try {
            let products = await productList(10);
            setProductListData(products)
            console.log(products);
        } catch (error) {
            console.log(error.message);


        }
    }
  const getPrice=(price)=>{
    alert("this product price is "+ price)
  }
    return (
        <>
            <h1 >Product List</h1>
            {
                productListData.map((productData) => (
                    <DisplayProducts 
                    key={productData.id}
                     productData={productData}
                     viewPrice={getPrice}
                      />
                ))
            }

        </>
    )
}

export default Products