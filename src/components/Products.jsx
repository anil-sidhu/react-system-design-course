import { useEffect, useState } from "react"
import { productList } from "../services/productServices"
import ErrorToast from './ErrorToast'

function Products() {
  const [message,setMessage]=useState('');
  const [displayError,setDisplayError]=useState(false)

  useEffect(() => {
    getProductList()
  }, [])

  const handleCloseToast=()=>{
  setMessage('');
      setDisplayError(false)
  }

  const getProductList = async () => {
    try{
      let products = await productList();
    console.log(products);
    }catch(error){
      console.log(error.message);
      setMessage(error.message);
      setDisplayError(true)
      
    }
  }
  return (
    <>
      <h1 >Product List</h1>
     {displayError && <ErrorToast message={message} onClose={handleCloseToast} />} 
    </>
  )
}

export default Products
