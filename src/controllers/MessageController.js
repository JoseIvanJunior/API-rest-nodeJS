const express = require('express')
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.use(authMiddleware)

router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId })
})

module.exports = app => app.use('/message', router)

// module.exports = {
//     async index(req, res) {
//         res.send({ ok: true, user: req.userId })
//     }

//     async create(req, res) {
//         const { name, description, message, whatsapp, email } = req.body

//         await connection('store').insert({
//             name,
//             description,
//             message,
//             whatsapp,
//             email
//         })

//         return response.json()
//     }
//}