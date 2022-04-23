const cors = require("cors")
const express = require("express")

const ProductsDAO = require("./db-access/products-dao")

const PORT = process.env.PORT || 8700
const app = express()

app.use(cors())
app.use(express.json())


app.use((req, _, next) => {
    console.log("new request –", req.method, req.url)
    next()
})

app.get("/", (_, res) => {
    res.send("Hi?")
})
//// #### ////

//GET
app.get("/products", (req, res) => {
    ProductsDAO
        .findAllProducts()
        .then((allProducts) => res.json(allProducts))
        .catch(_ => res.status(500).json({ err: "Error reading products" }))
})

//GET BY ID
app.get("/products/:id", (req, res) => {
    const id = req.params.id
    ProductsDAO
        .findProductById(id)
        .then(product => res.json(product))
        .catch(() => res.json({ err: "Error finding product with id: " + id }))
})

//POST
app.post("/newproducts", (req, res) => {
    const newProduct = {
        ProductName: req.body.productname,
        Company: req.body.company,
        Price: req.body.price,
        ProductLink: req.body.productlink,
        LinkShop: req.body.linkshop
    }
    ProductsDAO
        .insertProduct(newProduct)
        .then(() => ProductsDAO.findAllProducts())
        .then((allProducts) => res.json(allProducts))
        .catch(_ => res.status(500).json({ err: "Error saving new product" }))
})

//PUT 
app.put("/products/updated", (req, res) => {
    const targetId = req.body.id
    const newProductName = req.body.productname // if we want to set a new namee

    ProductsDAO
        .updateTodo(targetId, { ProductName: newProductName })
        .then(() => ProductsDAO.findAllProducts())
        .then((allProducts) => res.json(allProducts))
        .catch(_ => res.status(500).json({ err: "Unknown error while updating." }))
})

//DELETE
app.delete("/products/delete/:id", (req, res) => {
    const targetId = req.params.id

    ProductsDAO
        .deleteProduct(targetId)
        .then(() => ProductsDAO.findAllProducts())
        .then((allProducts) => res.json(allProducts))
        .catch(_ => res.status(500).json({ err: "Unknown error while deleting" }))
})




////

app.use((_, res) => {
    res.status(404).json({ err: "Not found." })
})
app.listen(PORT, () => console.log("Server listening on Port", PORT))