const express = require('express')
require('dotenv/config');

const app = express()

app.use(express.json())

require('./controllers/AuthController')(app)
require('./controllers/MessageController')(app)

const PORT = process.env.PORT || process.env.APP_URL

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})