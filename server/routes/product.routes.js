import express from "express";
// import path from 'path';
// import multer from 'multer';
import productCtrl from '../controllers/product.controller.js';
// import fs from 'fs'

// process.cwd() + '/client/public/image'

const router = express.Router()

router.route('/regist')
    .post(productCtrl.fileUpload, productCtrl.regist)

export default router