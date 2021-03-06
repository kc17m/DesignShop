import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { apiBaseUrl } from "../api";

const AddProduct = () => {

    const [productName, setProductName] = useState("Sample Product");
    const [company, setCompany] = useState("Sample Company");
    const [price, setPrice] = useState("$58.00");
    const [productLink, setProductLink] = useState("https://samplelink");
    const [linkShop, setLinkShop] = useState("https://sampleURL");

    const [error, setError] = useState("")

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(apiBaseUrl + "/products")
            .then((response) => response.json())
            .then(productsArr => setProduct(productsArr))
        console.log(product)
    }, [])


    const addNewProduct = (e) => {
        e.preventDefault()

        const postProduct = {
            ProductName: productName,
            Company: company,
            Price: price,
            ProductLink: productLink,
            LinkShop: linkShop
        }

        fetch(apiBaseUrl + "/newproducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postProduct
            })

        })
            .then(response => response.json())
            .then((data) => {
                if (data.err) setError(data.err)
                else {
                    setError("")

                    setProductName("Sample Product")
                    setCompany("Sample Company")
                    setPrice("$58.00")
                    setProductLink("https://samplelink")
                    setLinkShop("https://sampleURL")

                    setProduct(data)
                }
            })
    }

    return (<div>
        <section className="addprod">
            <h3>Add Product - TEST</h3>
            <form>
                <label htmlFor="productname">Product Name</label>
                <br />
                <input type="text" name="productname" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <br />
                <label htmlFor="company">Company</label><br />
                <input type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                <br />
                <label htmlFor="price">Price</label><br />
                <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label htmlFor="productLink">Product Link</label><br />
                <input type="text" name="productLink" value={productLink} onChange={(e) => setProductLink(e.target.value)} /> <br />
                <label htmlFor="linkShop">Link to Shop</label><br />
                <input type="text" name="linkShop" value={linkShop} onChange={(e) => setLinkShop(e.target.value)} /> <br />
                <button onClick={addNewProduct}>Add to Product List</button>
            </form>
            <Link to={"/"}>  <h4 className="addButton">Back to Product List</h4></Link>
        </section>
        <div>{error}</div>
    </div>);
}

export default AddProduct;