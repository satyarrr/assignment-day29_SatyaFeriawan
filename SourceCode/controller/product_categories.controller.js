const models = require('../models/index') 

function insertProduct_categories(req, res) {
    let form = req.body
    models.Product_categories.create(form)

    return res.send({ message: 'Data has been created', data: form })
}

async function listProduct_categories(req, res) {
    const result = await models.Product_categories.findAll()
    if (result.length < 1) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

async function detailProduct_categories(req, res) {
    const result = await models.Product_categories.findOne({ where: { id: req.params.id } })
    if (!result) {
        return res.status(204).send({ message: 'Data is empty' })
    }
    return res.send({ message: 'Data is found', data: result })
}

function updateProduct_categories(req, res) {
    let data = req.body
    models.Product_categories.update(data, { where: { id: req.params.id } })
    
    return res.send({ message: 'Data has been updated', data: req.body })
}

function deleteProduct_categories(req, res) {
    models.Product_categories.destroy({ where: { id: req.params.id } })
    return res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertProduct_categories,
    listProduct_categories,
    detailProduct_categories,
    updateProduct_categories,
    deleteProduct_categories
}