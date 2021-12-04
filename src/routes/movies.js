const {Router} = require('express')
const router = Router()
const _ = require('underscore')


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

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (id && title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id === id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.status(200).json({
            "message": "Movie updated",
            "model": movies
        })
    } else {
        res.status(500).json({
            "message": "Internal server error"
        })
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movies.splice(i, 1);
            }
        });
        res.status(200).json({
            "message": "Movie deleted",
            "model": movies
        })
    }else{
        res.status(500).json({
            "message": "Internal server error"
        })
    }
});

module.exports = router