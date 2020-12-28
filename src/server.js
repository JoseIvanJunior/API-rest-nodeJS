const express = require('express')

const routes = require('./routes')

const app = express()

//app.set('view engine', 'ejs')
app.use(express.json())
//app.use(routes)

const PORT = process.env.PORT || 3333

require('./controllers/authController')(app)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})