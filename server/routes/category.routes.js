import express from "express";
import categoryCtrl from "../controllers/category.controller.js";

const router = express.Router()

router.route('/main')
    .get(categoryCtrl.getCategory)

router.route('/sub/:name')
    .get(categoryCtrl.getSubCategory)

export default router