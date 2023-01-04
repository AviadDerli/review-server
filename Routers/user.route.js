const express = require('express')
const router = express.Router()

router.post('/login', async (req, res) => {

    try {
    }
    catch(err) {
        console.log(err.message);
        res.sendStatus(400)
    }
})

module.exports = router