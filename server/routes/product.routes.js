import express from "express";
import productCtrl from '../controllers/product.controller.js';


const router = express.Router()

router.route('/regist')
    .post(productCtrl.imageUpload, productCtrl.regist)

router.route('/getproduct/:category')
    .get(productCtrl.getlist)

router.param('category', productCtrl.categoryId)
    
export default router