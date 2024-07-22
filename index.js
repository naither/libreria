// index.js
const express = require('express');
const { faker } = require('@faker-js/faker');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/librery', (req, res) => {
    const products = [];
    for (let index = 0; index < 100; index++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            category: faker.commerce.department(),
            image: faker.image.imageUrl(),
        });
    }
    res.status(200).json(products);
});

app.listen(port, () => {
    console.log("My port: " + port);
});
