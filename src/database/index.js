const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:1q2w3e4r@cluster0.ntoku.mongodb.net/mycruddb?retryWrites=true&w=majority',
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

mongoose.Promise = global.Promise

module.exports = mongoose