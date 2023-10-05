const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const productsData = require('../routes/sample.json');

router.get('/products', (req, res) => {
    res.json(productsData);
});

router.post('/products', (req, res) => {
    const { product, price } = req.body;
    if (product && price) {
        const id = productsData.length + 1; 
        const newProduct = { id, ...req.body};
        productsData.push(newProduct);
        res.json(productsData);
    } else {
        res.status(400).send('Wrong Request'); 
    }
});

router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { product: newProduct, price } = req.body; // Cambio de nombre a 'newProduct'
    
    if (newProduct && price) {
        _.each(productsData, (existingProduct, i) => { // Cambio de nombre a 'existingProduct'
            if (existingProduct.id == id) {
                existingProduct.product = newProduct; // Asignar 'newProduct' al producto existente
                existingProduct.price = price; // Actualizar el precio
            }
        });
        res.json(productsData);
    } else {
        res.status(400).send('Wrong Request');
    }
});


router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    productsData.forEach((product, i) => {
        if (product.id == id) {
            productsData.splice(i, 1);
        }
    });
    res.json(productsData);
});

module.exports = router;
