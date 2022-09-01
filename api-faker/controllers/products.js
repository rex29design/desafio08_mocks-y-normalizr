const { faker } = require("@faker-js/faker")

function createProduct() {
    return {
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        image: faker.image.image()
    }
}

module.exports = createProduct