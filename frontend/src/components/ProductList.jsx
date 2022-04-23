import { Link } from "react-router-dom"


const ProductList = (props) => {
    return (
        <div>
            <h2>All Products - TEST</h2>
            <Link to={"/newproducts"}><h5>Add Products</h5></Link>

            {props.products.map(product =>
                <section key={product._id}>

                    <Link to={"/product/" + product._id}>  <figure><img src={product.ProductLink} alt="product" /></figure><div><figcaption>{product.ProductName}</figcaption><div>{product.Price}</div></div><div className="company">{product.Company}</div> </Link>

                </section>
            )
            }

        </div >
    );
}

export default ProductList;