const {Router} = require('express')
const router = Router()

// Routes
router.get('/test',(req,res) =>{
    const data = {
        "Name": "Nicolas",
        "user_id": "11233394"
    }

    res.json({
        "Title": "Hello world",
        "Description": "Im here",
        "model": data
    })
})


module.exports = router