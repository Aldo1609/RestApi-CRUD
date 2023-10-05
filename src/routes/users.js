const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch'); // Importación CommonJS


router.get('/users', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.send(users);
})

module.exports = router;