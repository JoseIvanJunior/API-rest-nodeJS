const express = require('express')
require('dotenv/config');
//const routes = require('./routes')

const app = express()

//app.set('view engine', 'ejs')
app.use(express.json())
//app.use(routes)

require('./controllers/AuthController')(app)
require('./controllers/MessageController')(app)

const PORT = process.env.PORT || process.env.APP_URL

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})