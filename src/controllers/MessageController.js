const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Message = require('../models/Message')

const router = express.Router()

router.use(authMiddleware)

router.get('/', (req, res) => {
    //res.send({ ok: true, user: req.userId })
    Message.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})


router.post('/', async (req, res) => {
    const message = await Message.create(req.body)

        return res.send(message)
})

module.exports = app => app.use('/message', router)