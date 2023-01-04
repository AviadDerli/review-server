const express = require('express')
const router = express.Router()
const userService = require('../BL/user.service')

router.post('/login', async (req, res) => {

    try {
    const token = await userService.login(req.body)
    res.send(token)

    }
    catch(err) {
        console.log(err.message);
        res.sendStatus(400)
    }
})

module.exports = router