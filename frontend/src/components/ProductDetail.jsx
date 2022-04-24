import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { apiBaseUrl } from "../api";

const ProductDetail = () => {

    const { productId } = useParams()
    console.log(productId)
    const [productDetail, setProductDetail] = useState()

    useEffect(() => {
        fetch(apiBaseUrl + "/products/" + productId)
            .then(response => response.json())
            .then(productData => {
                console.log(productData)
                if (!productData.err) {
                    setProductDetail(productData)
                }
            })
    }, [productId])

    return (
        <div>
            <h2>Product - Detail - TEST</h2>
            <figure><img src={productDetail.ProductLink} alt="" /></figure>
            <p>{productDetail.ProductName}</p>
            <p>{productDetail.Company}</p>
            <p>{productDetail.Price}</p>
            <Link to="/"> <button>Go Back</button></Link>


        </div >
    );
}

export default ProductDetail;