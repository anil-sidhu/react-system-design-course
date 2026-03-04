import { useEffect, useState } from "react"
import { productList } from "../services/productServices"
import DisplayProducts from "./DisplayProducts"
import { PRODUCT_URL } from "../../../shared/services/api/endPoints"

function Products() {

    const [productListData, setProductListData] = useState([])
    useEffect(() => {
        getProductList()
    }, [])



    const getProductList = async () => {

        try {
            let response = await fetch(PRODUCT_URL)
            response = await response.json()
            console.log(response);
            setProductListData(response.products)

        } catch (error) {
            console.log(error.message);


        }
    }
    const getPrice = (price) => {
        alert("this product price is " + price)
    }
    return (
        <>
            <h1 >Product List</h1>
            {
                productListData.map((productData) => (
                    <h3 key={productData.id} >
                        <li className="list-bottom-border" >{productData?.title}</li>
                        <button onClick={() => getPrice(productData.price)} >View Price</button>
                    </h3>
                ))
            }

        </>
    )
}

export default Products