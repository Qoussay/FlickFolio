const express = require('express');
const router = express.Router();

const sendHelloWorld = (req, res) => {
    res.send('Hello World!');
}

router.get('/', sendHelloWorld);

module.exports = router;