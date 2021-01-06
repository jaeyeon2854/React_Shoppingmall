import express from 'express'
import kakaopayCtrl from '../controllers/kakaopay.controller.js'

const router = express.Router()

router.route('/kakaopay/success')
  .get(kakaopayCtrl.success)

router.route('/api/kakaopay/fail')
  .get(kakaopayCtrl.fail)

router.route('/api/kakaopay/cancel')
  .get(kakaopayCtrl.cancel)

router.route('/api/kakaopay/test/single')
  .post(kakaopayCtrl.singleTest)

export default router
