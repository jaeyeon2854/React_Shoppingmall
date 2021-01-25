import express from "express";
import productCtrl from '../controllers/product.controller.js';


const router = express.Router()

router.route('/regist')
    .post(productCtrl.imageUpload, productCtrl.regist)

router.route('/getproduct')
    .get(productCtrl.getToHome)

router.route('/getproduct/all')
    .get(productCtrl.getAll)

router.route('/getproduct/:category')
    .get(productCtrl.getlist)

// router.route('/getproduct/:subcategory')
//     .get(productCtrl.subgetlist)

router.param('category', productCtrl.categoryId)

// router.param('subcategory',productCtrl.subcategoryId)
    
export default router