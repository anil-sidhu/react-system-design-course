function DisplayProducts({productData,viewPrice}){
    return(
        <>
        <h3>
            <li className="list-bottom-border" >{productData?.title}</li>
            <button onClick={()=>viewPrice(productData.price)} >View Price</button>
        </h3>
        </>
    )
}

export default DisplayProducts