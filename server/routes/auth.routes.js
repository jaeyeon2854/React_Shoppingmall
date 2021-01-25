import express from "express";
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router()

router.route('/login')
    .post(authCtrl.login)

router.route('/logout')
     .get(authCtrl.logout)

router.route('/admin/:admin')
    .post(authCtrl.admin)

router.param('admin',authCtrl.adminId)

export default router