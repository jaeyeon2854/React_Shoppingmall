import express from "express";
import orderCtrl from '../controllers/order.controller.js';


const router = express.Router()

router.route('/addorder')
    .post(orderCtrl.addorder)
// .get()

router.route('/showorder/:userId')
    .get(orderCtrl.showorder)

    
export default router