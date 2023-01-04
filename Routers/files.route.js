const express = require('express')
const router = express.Router()

router.get('/upload', async (req, res) => {

    try {
        

        // read files

        // update files
        
        // delete files

    }
    catch(err) {
        console.log(err.message);
        res.sendStatus(400)
    }

})

module.exports = router