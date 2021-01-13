import express from "express";
import categoryCtrl from "../controllers/category.controller.js";

const router = express.Router()

router.route('/')
    .get(categoryCtrl.getCategory)

export default router