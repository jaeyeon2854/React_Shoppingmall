import express from "express";
import productCtrl from '../controllers/product.controller.js';


const router = express.Router()

router.route('/regist')
    .post(productCtrl.imageUpload, productCtrl.regist)

router.route('/getproduct')
    .get(productCtrl.getToHome)

router.route('/getproduct/all')
    .get(productCtrl.getAll)

router.route('/getproduct/main/:category')
    .get(productCtrl.getlist)

router.route('/getproduct/sub')
    .get(productCtrl.subname)

router.route('/pluspurchase')
    .post(productCtrl.plusPurchase)

router.route('/delete')
    .delete(productCtrl.deletePro)

router.param('category', productCtrl.categoryId)

export default router