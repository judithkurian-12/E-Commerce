const express=require('express');	
const router=express.Router();
const path=require("path");
const shopController=require('../controllers/shopcontroller');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrders);

router.post('/create-order', shopController.postOrders);

module.exports=router;	