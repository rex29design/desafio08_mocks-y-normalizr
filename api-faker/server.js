const express = require("express")
const createProduct = require("./controllers/products")

const app = express()

const PORT = process.env.PORT || 8080

//--EJS--//
app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//--API FAKER--//
app.get("/api/productos-test", (req, res) => {
    const cant = Number(req.query.cant) || 5

    const prods = []
    for (let i = 0; i < cant; i++) {
        prods.push(createProduct())
    }
    res.render("index", {prods})
})

//--NORMALIZER API--//

//--SERVER 8080--//
const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server.`, e))