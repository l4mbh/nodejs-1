const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./routes/index')
const db = require('./config/db')

const app = express()
const port = 3000

// Connect database
db.connect();

app.use(express.static(path.join(__dirname, 'public'))) // Set public static
// app.use(morgan('combined'))

// Template engine
app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
    }),
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route(app)

app.listen(port, () =>
    console.log(`App is running on http://localhost:${port}`),
)