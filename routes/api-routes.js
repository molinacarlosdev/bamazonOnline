const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('API page to be worked on!');
});

module.exports = router;