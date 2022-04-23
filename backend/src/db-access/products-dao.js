const { ObjectId } = require("mongodb")
const { getDB } = require("./getDB")

//GET
function findAllProducts() {
    return getDB().then(db => db.collection("products").find().toArray())
}

//GET BY ID
function findProductById(id) {
    return getDB()
        .then(db => db.collection("products").findOne({ _id: new ObjectId(id) }))
}

//POST
function insertProduct(productsObject) {
    return new Promise((resolve, reject) => {
        getDB()
            .then(db => db.collection("products").insertOne(productsObject))
            .then(result => {
                if (result.acknowledged === true && result.insertedId) {
                    resolve()
                }
                else {
                    reject()
                }
            })
            .catch((err) => reject(err))
    })
}

//PUT
function updateProduct(id, productUpdateInfoObject) {
    return getDB()
        .then(db => {
            db
                .collection("products")
                .updateOne(
                    { _id: new ObjectId(id) },
                    { $set: productUpdateInfoObject }
                )
        })
}

//DELETE
function deleteProduct(id) {
    return getDB().then(db => db.collection("products").deleteOne({ _id: new ObjectId(id) }))
}


module.exports = {
    findAllProducts,
    findProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}