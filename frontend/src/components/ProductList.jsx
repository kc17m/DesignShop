import { Link } from "react-router-dom"


const ProductList = (props) => {
    return (
        <div>
            <h2>All Products - TEST</h2>
            <Link to={"/newproducts"}><h3 className="addButton">Add Products - Click here</h3>
            </Link>
            <div className="prodList">
                {props.products.map(product =>
                    <section key={product._id}>


                        <Link to={"/products/" + product._id}>  <figure><img src={product.ProductLink} alt="product" /></figure><div><figcaption>{product.ProductName}</figcaption><div>{product.Price}</div></div><div className="company">{product.Company}</div> </Link>

                    </section>
                )
                }
            </div>
        </div >
    );
}

export default ProductList;