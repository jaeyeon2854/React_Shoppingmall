import express from "express";
import userCtrl from '../controllers/user.controller.js';

const router = express.Router()

router.route('/signup')
    .post(userCtrl.signup)

router.route('/account/:userId')
    .get(userCtrl.username)

router.param('userId', userCtrl.userById)


export default router