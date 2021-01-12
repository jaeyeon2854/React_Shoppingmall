import express from "express";
import productCtrl from '../controllers/product.controller.js';


const router = express.Router()

router.route('/regist')
    .post(productCtrl.fileUpload, productCtrl.regist)
router.route('/productone')
    .get(productCtrl.getProduct)
    
export default router