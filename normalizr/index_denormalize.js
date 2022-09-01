const fs = require("fs")
const {normalize, denormalize, schema} = require("normalizr")

const authorSchema = new schema.Entity("author")
const textSchema = new schema.Entity("messages", {
    author: authorSchema
})

fs.readFile("./authors_normalized.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    json = JSON.parse(data)

    const dataDenormalized = denormalize(json.result, [textSchema], json.entities)
    console.log(dataDenormalized);
    
    fs.writeFile("./authors_denormalized.json", JSON.stringify(dataDenormalized), err => console.log(err))
    

})