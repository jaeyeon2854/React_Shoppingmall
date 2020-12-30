import express from "express";
import userCtrl from '../controllers/user.controller.js';

const router = express.Router()

router.route('/api/users/signup')
    .post(userCtrl.signup)
    .get(userCtrl.hello)

export default router