import express from "express";
import productCtrl from '../controllers/product.controller.js';

const router = express.Router()

router.route('/regist')
    .post(productCtrl.imageUpload, productCtrl.regist)
export default router