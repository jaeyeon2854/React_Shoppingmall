import express from "express";
import cartCtrl from '../controllers/cart.controller.js';

const router = express.Router()

router.route('/addcart')
    .put(cartCtrl.addCart)

router.route('/showcart/:userId')
    .get(cartCtrl.showCart)

router.route('/changecart')
    .post(cartCtrl.changeCart)

router.route('/deletecart')
    .post(cartCtrl.deleteCart)
router.route('/deletecart2')
    .post(cartCtrl.deleteCart2)

router.param('userId', cartCtrl.userById)

export default router