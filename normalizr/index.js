const fs = require("fs")
const {normalize, denormalize, schema} = require("normalizr")

const authorSchema = new schema.Entity("author")
const textSchema = new schema.Entity("messages", {
    author: authorSchema
})

fs.readFile("./authors.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    json = JSON.parse(data)

    const dataNormalized = normalize(json, [textSchema])
    console.log(dataNormalized);

    fs.writeFile("./authors_normalized.json", JSON.stringify(dataNormalized), err => console.log(err))

})

