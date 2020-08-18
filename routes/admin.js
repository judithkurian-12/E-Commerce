const express=require('express');
const router=express.Router();
const path=require("path");
const adminController=require('../controllers/admincontroller');

router.get('/add-product', adminController.getAddProduct);

// router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);

// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProducts);

module.exports=router;