const connection = require('../database')

module.exports = {
    async index(req, res) {
        const stores = connection('store').select('*')

        return res.json(stores)
    },

    async create(req, res) {
        const { name, description, message, whatsapp, email } = req.body

        await connection('store').insert({
            name,
            description,
            message,
            whatsapp,
            email
        })

        return response.json()
    }
}