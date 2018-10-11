const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('halo dari index.js')
})

module.exports = router