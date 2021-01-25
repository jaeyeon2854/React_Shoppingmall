import express from "express";
import productCtrl from '../controllers/product.controller.js';


const router = express.Router()

router.route('/sort')
    .get(productCtrl.Sortlist)

router.route('/regist')
    .post(productCtrl.imageUpload, productCtrl.regist)

router.route('/getproduct')
    .get(productCtrl.getToHome)

router.route('/getproduct/all')
    .get(productCtrl.getAll)

router.route('/getproduct/main/:category')
    .get(productCtrl.getlist)

router.route('/getproduct/sub/:subname')
    .get(productCtrl.subname)

router.route('/pluspurchase')
    .post(productCtrl.plusPurchase)

router.param('category', productCtrl.categoryId)
router.param('subname',productCtrl.subcategoryId)
    
export default router