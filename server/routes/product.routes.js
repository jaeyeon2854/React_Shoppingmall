import express from "express";
import path from 'path';
import multer from 'multer';
import productCtrl from '../controllers/product.controller.js';
import fs from 'fs'

// process.cwd() + '/client/public/image'

const router = express.Router()

fs.readdir('uploads', (error, data) => {
    if (error) {
        fs.mkdirSync('uploads');
        if (data == undefined) {
          fs.mkdirSync('/main')
          fs.mkdirSync('/detail')
        }
    } else console.log("else data",data)
  })

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        }, // 저장 경로 변경
        filename(req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }, // 파일명 변경
     }),
});

router.route('/regist')
    .post(productCtrl.regist)
// upload.array('main_image'), 
export default router