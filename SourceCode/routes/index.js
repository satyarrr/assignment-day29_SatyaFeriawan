const express = require('express')
const productRoute = require('../controller/product.controller')
const product_categoriesRoute = require('../controller/product_categories.controller')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({message : 'Hello World'})
})

router.get('/product', productRoute.listProduct)
router.get('/product/:id', productRoute.detailProduct)
router.post('/product', productRoute.insertProduct)
router.put('/product/:id', productRoute.updateProduct)
router.delete('/product/:id', productRoute.deleteProduct)

router.get('/product_categories', product_categoriesRoute.listProduct_categories)
router.get('/product_categories/:id', product_categoriesRoute.detailProduct_categories)
router.post('/product_categories', product_categoriesRoute.insertProduct_categories)
router.put('/product_categories/:id', product_categoriesRoute.updateProduct_categories)
router.delete('/product_categories/:id', product_categoriesRoute.deleteProduct_categories)

module.exports = router