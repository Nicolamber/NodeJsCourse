const express = require('express')
const app = express()
const morgan = require('morgan')

//settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))

// Server config
app.listen(app.get('port'), () =>{
    console.log(`Server Listen on port ${app.get('port')}`)
})