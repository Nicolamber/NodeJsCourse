const {Router} = require('express')
const router = Router()

const movies = require('../sample.json')

router.get('/',(req,res)=>{
    res.status(200).json({
        "message": "Movies retrieved",
        "model": movies
    })
})

router.post('/',(req,res) =>{
    const {title, director, year, rating } = req.body
    if(title && director && year && rating){
        const id = movies.length + 1
        const newMovie = {id, ...req.body}
        movies.push(newMovie)
        res.status(200).json({
            "message": "Movie saved",
            "model": movies
        })
    }else{
        res.status(500).json({
            "message": "Internal server error"
        })
    }
    res.send("success")
})

module.exports = router