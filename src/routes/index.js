const { Router } = require('express');
const router = Router();

// routes
router.get('/', (req, res) => {
    res.send({Tittle: 'This is my first API'});
})

router.get('/test', (req, res) => {
    const name = {
        name: "Aldo",
        lastname: "Becerra"
    };
    res.json(name);
});

module.exports = router;