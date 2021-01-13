import express from "express";
import cartCtrl from '../controllers/cart.controller.js';


const router = express.Router()

router.route('/addcart')
    .put(cartCtrl.addcart)
// .get()

router.route('/showcart/:userId')
    .get(cartCtrl.showcart)
router.param('userId', cartCtrl.userById)


router.route('/deletecart')
    .post(cartCtrl.deletecart)
    
export default router