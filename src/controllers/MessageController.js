const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Message = require('../models/Message')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().populate('user')

        return res.send({ messages })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading message' })
    }
})

router.get('/:messageId', async (req, res) => {
    try {
        const message = await Message.findById(req.params.messageId).populate('user')

        return res.send({ message })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading message' })
    }
})

router.put('/:messageId', async (req, res) => {
    try {
        const { title, description } = req.body

        const message = await Message.findByIdAndUpdate(req.params.messageId, {
            title,
            description
        }, { new: true })

        return res.send({ message })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error creating message' })
    }
})

router.delete('/:messageId', async (req, res) => {
    try {
        await Message.findByIdAndRemove(req.params.messageId).populate('user')

        return res.send()
    } catch (error) {
        return res.status(400).send({ error: 'Error deleting message' })
    }
})

router.post('/', async (req, res) => {
    try {
        const message = await Message.create({ ...req.body, user: req.userId })

        return res.send({ message })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating message' })
    }
})

module.exports = app => app.use('/message', router)