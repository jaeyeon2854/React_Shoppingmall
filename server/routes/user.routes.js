import express from "express";
import userCtrl from '../controllers/user.controller.js';

const router = express.Router()

router.route('/signup')
    .post(userCtrl.signup)

export default router