import express from "express";
import cartCtrl from '../controllers/cart.controller.js';


const router = express.Router()

router.route('/')
    .post(cartCtrl.cart)
    // .get()

export default router