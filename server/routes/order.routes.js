import express from "express";
import orderCtrl from '../controllers/order.controller.js';

const router = express.Router()

router.route('/addorder')
    .post(orderCtrl.addorder)

router.route('/showorder/:userId')
    .get(orderCtrl.showorder)

router.route('/recommend')
    .post(orderCtrl.recommendPro)

router.param('userId', orderCtrl.orderById)
    
export default router