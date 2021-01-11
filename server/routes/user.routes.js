import express from "express";
import userCtrl from '../controllers/user.controller.js';

const router = express.Router()

router.route('/signup')
    .post(userCtrl.signup)

router.route('/api/users/Mypage/:userId')
    .get(userCtrl.getProfile)
    .put(userCtrl.profileUpload, userCtrl.update)

router.param('userId', userCtrl.userById)


export default router